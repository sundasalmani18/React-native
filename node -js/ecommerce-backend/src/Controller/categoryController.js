import Category from '../Model/categoryModel.js'

// Add Category
export const addCategory = async (req, res) => {
  try {
       console.log("Body:", req.body);
    console.log("File:", req.file);
    const {name} = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const exists = await Category.findOne({ name });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await Category.create({
      name,
      image: req.file.path, // Cloudinary URL
    });

    res.status(201).json({
      success: true,
      message: "Category Added Successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Categories
export const getCategories = async (req, res) => {
    try {

        const categories = await Category.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: categories,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Update Category
export const updateCategory = async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    if (name) {
      category.name = name;
    }

    // Agar nayi image upload hui hai
    if (req.file) {
      category.image = req.file.path;
    }

    await category.save();

    res.status(200).json({
      success: true,
      message: "Category Updated Successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Category
export const deleteCategory = async (req, res) => {
    try {

        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        await Category.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Category Deleted Successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

