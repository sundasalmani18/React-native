import Category from '../Model/categoryModel.js'

// Add Category
export const addCategory = async (req, res) => {
    try {
        const { name, image } = req.body;

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
            image,
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

        const { id } = req.params;
        const { name, image } = req.body;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }

        category.name = name || category.name;
        category.image = image || category.image;

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

