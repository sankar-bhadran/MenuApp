const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.addMenuItem = async (req, res) => {
  console.log(req.body);
  const { itemName, price, description, category } = req.body;

  if (!itemName || !price || !category) {
    return res
      .status(400)
      .json({ message: "Item name, price, and menu ID are required." });
  }

  try {
    const newMenuItem = await prisma.menuItem.create({
      data: {
        itemName,
        price: price * 1,
        description,
        menuId: category,
      },
    });
    console.log(newMenuItem);

    return res.status(201).json(newMenuItem);
  } catch (error) {
    console.error("Error adding menu item:", error);
    return res.status(500).json({ message: "Failed to add menu item." });
  }
};

exports.getItems = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "ID is required." });
    }
    console.log(id);
    const menuItem = await prisma.menuItem.findUnique({
      where: { menuId: id },
      include: { menu: true },
    });
    console.log(menuItem);

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    res.status(200).json([menuItem]);
  } catch (error) {
    console.error("Error fetching menu item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
