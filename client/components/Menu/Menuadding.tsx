import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";

interface MenuItem {
  id: string;
  menuName: string;
}

interface MenuDetails {
  menuName: string;
  description: string;
}

const Menuadding: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allMenu, setAllMenu] = useState<MenuItem[]>([]);
  const [menuDetails, setMenuDetails] = useState<MenuDetails>({
    menuName: "",
    description: "",
  });
  const [addItem, setAddItem] = useState({
    category: "",
    itemName: "",
    description: "",
    price: "",
  });

  const handleMenuDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMenuDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddItem = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getAllMenu = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getmenu");
      const data = await response.json();
      setAllMenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMenu();
  }, [menuDetails]);

  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/additem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addItem),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Data submitted successfully:", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOk = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/addmenu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuDetails),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Data submitted successfully:", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-screen bg-black bg-cover flex justify-center items-center">
      <form className="w-[30%]" onSubmit={handleSubmit}>
        <div className="flex flex-col border border-gray-300 p-4 gap-4  justify-center rounded-md shadow-lg bg-gray-50">
          <select
            name="category"
            id="category"
            onChange={handleAddItem}
            value={addItem.category}
            className="h-[40px] px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
          >
            <option value="" disabled selected>
              Select an menu
            </option>
            {allMenu.map((val) => (
              <option value={val.id} key={val.id}>
                {val.menuName}
              </option>
            ))}
          </select>

          <button
            className="bg-[#0796EF] text-white w-full h-[40px] rounded-md hover:bg-[#0796EF] transition duration-200"
            onClick={showModal}
          >
            Add Menu
          </button>

          <input
            type="text"
            placeholder="Enter item name"
            onChange={handleAddItem}
            value={addItem.itemName}
            name="itemName"
            className="h-[40px] px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
          />

          <textarea
            id=""
            placeholder="Enter description"
            onChange={handleAddItem}
            value={addItem.description}
            name="description"
            className="h-[100px] px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700 resize-none"
          ></textarea>

          <input
            type="number"
            id=""
            placeholder="Enter price"
            onChange={handleAddItem}
            value={addItem.price}
            name="price"
            className="h-[40px] px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
          />
          <button
            className="bg-[#0796EF] text-white w-full h-[40px] rounded-md hover:bg-[#0796EF] transition duration-200"
            type="submit"
          >
            Add Item
          </button>
        </div>
      </form>
      <Modal
        title="Add Menu"
        open={isModalOpen}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="menuName"
            placeholder="Enter item name"
            onChange={handleMenuDetails}
            value={menuDetails.menuName}
            className="h-[40px] w-[100%] px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
          />
          <textarea
            name="description"
            id=""
            value={menuDetails.description}
            onChange={handleMenuDetails}
            placeholder="Enter description"
            className="w-[100%] px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700 resize-none"
          ></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default Menuadding;
