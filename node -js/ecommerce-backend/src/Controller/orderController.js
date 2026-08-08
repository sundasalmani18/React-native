import Order from "../Model/orderModel.js";
import Product from "../Model/productModel.js";


// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const {
      user,
      customerName,
      customerEmail,
      customerPhone,
      items,
      shippingFee = 0,
      discount = 0,
      paymentMethod = "Cash on Delivery",
      shippingAddress,
      notes = "",
    } = req.body;

    if (
      !customerName ||
      !customerEmail ||
      !items ||
      items.length === 0 ||
      !shippingAddress?.address ||
      !shippingAddress?.city
    ) {
      return res.status(400).json({
        success: false,
        message: "Required order fields are missing",
      });
    }

    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product not found: ${item.product}`,
        });
      }

      const quantity = Number(item.quantity);

      if (quantity <= 0) {
        return res.status(400).json({
          success: false,
          message: "Quantity must be greater than 0",
        });
      }

      if (product.quantity < quantity) {
        return res.status(400).json({
          success: false,
          message: `${product.name} is out of stock`,
        });
      }

      const itemPrice =
        product.salePrice > 0
          ? product.salePrice
          : product.price;

      subtotal += itemPrice * quantity;

      orderItems.push({
        product: product._id,
        name: product.name,
        image: product.image,
        quantity,
        price: product.price,
        salePrice: product.salePrice,
      });
    }

    const totalAmount =
      subtotal +
      Number(shippingFee) -
      Number(discount);

    if (totalAmount < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid order total",
      });
    }

    const orderNumber =
      "ORD-" +
      Date.now();

    const order = await Order.create({
      orderNumber,
      user: user || undefined,
      customerName,
      customerEmail,
      customerPhone,
      items: orderItems,
      subtotal,
      shippingFee,
      discount,
      totalAmount,
      paymentMethod,
      shippingAddress,
      notes,
    });

    // Reduce product quantity
    for (const item of items) {
      await Product.findByIdAndUpdate(
        item.product,
        {
          $inc: {
            quantity: -Number(item.quantity),
          },
        }
      );
    }

    const populatedOrder =
      await Order.findById(order._id)
        .populate("user")
        .populate("items.product");

    res.status(201).json({
      success: true,
      message: "Order Created Successfully",
      data: populatedOrder,
    });

  } catch (error) {
    console.log("Create Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET ALL ORDERS
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("items.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE ORDER
export const updateOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      paymentMethod,
      paymentStatus,
      orderStatus,
      shippingAddress,
      shippingFee,
      discount,
      notes,
    } = req.body;

    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.customerName =
      customerName || order.customerName;

    order.customerEmail =
      customerEmail || order.customerEmail;

    order.customerPhone =
      customerPhone ?? order.customerPhone;

    order.paymentMethod =
      paymentMethod || order.paymentMethod;

    order.paymentStatus =
      paymentStatus || order.paymentStatus;

    order.orderStatus =
      orderStatus || order.orderStatus;

    order.shippingAddress =
      shippingAddress || order.shippingAddress;

    order.shippingFee =
      shippingFee ?? order.shippingFee;

    order.discount =
      discount ?? order.discount;

    order.notes =
      notes ?? order.notes;

    order.totalAmount =
      order.subtotal +
      Number(order.shippingFee) -
      Number(order.discount);

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order Updated Successfully",
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE ORDER STATUS
export const updateOrderStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "Pending",
      "Confirmed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        {
          orderStatus: status,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order Status Updated Successfully",
      data: order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE ORDER
export const deleteOrder = async (req, res) => {
  try {
    const order =
      await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await Order.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Order Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};