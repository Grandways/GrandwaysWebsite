"use client";

import { useState } from "react";

const Quote = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeOptions, setActiveOptions] = useState({});
  const [isHidden2, setIsHidden2] = useState(true);
  const [secondForm, setSecondForm] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${form.name} ${form.lastname}`,
          email: form.email,
          message: `
            New quote request for Branding:\n\n
            Name: ${form.name} ${form.lastname}\n
            Email: ${form.email}\n\n\n
            Items Requested:\n\n
              ${items
                .map((item) => `${item.name} x${item.quantity}`)
                .join("")}\n\n\n
            Sent from the GrandWays Website ;)
          `,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${secondForm.name} ${secondForm.lastname}`,
          email: secondForm.email,
          message: `
            New quote request for the following service(s):\n\n
            Name: ${secondForm.name} ${secondForm.lastname}\n
            Email: ${secondForm.email}\n\n\n
            Service(s) Requested:\n\n
              ${selectedOptions.map((option) => `${option}`).join("")}\n\n\n
            Sent from the GrandWays Website ;)
          `,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOptions = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      setActiveOptions((prevState) => ({ ...prevState, [option]: false }));
    } else {
      setSelectedOptions([...selectedOptions, option]);
      setActiveOptions((prevState) => ({ ...prevState, [option]: true }));
    }
  };

  const handleItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addItem = () => {
    if (itemName && quantity > 0) {
      setItems([...items, { name: itemName, quantity: quantity }]);
      setItemName("");
      setQuantity(0);
    }
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const toggleVisibility2 = () => {
    setIsHidden2(!isHidden2);
  };

  return (
    <>
      <div>
        <div className="w-full h-[350px] bg-[#F8F9F9] flex flex-col justify-center items-center">
          <h1>Get a Quote</h1>
        </div>

        <div className="w-full flex flex-col items-center py-[50px] px-[135px] gap-[50px]">
          <div className="flex flex-col items-center gap-[25px]">
            <h3>Branding</h3>
            <p className="w-[770px] text-center">
              If you are interested in branded items, (eg. Corporate Clothing,
              Notepads, Pens etc.) please browse our branding catalogue(s) and
              request a quote below.
            </p>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            <a href="/company-profile.pdf" target="_blank">
              <div className="group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms]">
                <p className="font-bold text-[#333333] group-hover:text-[#FFFFFF]">
                  Corporate Wear
                </p>
              </div>
            </a>
            <a href="/winter-cat.pdf" target="_blank">
              <div className="group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms]">
                <p className="font-bold text-[#333333] group-hover:text-[#FFFFFF]">
                  Winter Catalogue
                </p>
              </div>
            </a>
            <a href="/outdoor-cat.pdf" target="_blank">
              <div className="group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms]">
                <p className="font-bold text-[#333333] group-hover:text-[#FFFFFF]">
                  Outdoor Catalogue
                </p>
              </div>
            </a>
          </div>

          <button
            className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#333333] border-solid"
            onClick={toggleVisibility}
          >
            Get Quote
          </button>
        </div>

        {!isHidden && (
          <div className="w-full flex flex-col py-[50px] gap-[50px] items-center">
            <h2>Get a Quote</h2>

            <div className="flex gap-[25px]">
              <div className="flex flex-col gap-[10px]">
                <p>Item Name</p>
                <input
                  type="text"
                  className="w-[520px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                  value={itemName}
                  onChange={handleItemName}
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <p>Quantity</p>
                <input
                  type="number"
                  className="w-[125px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                  value={quantity}
                  onChange={handleQuantity}
                />
              </div>
            </div>

            <button
              onClick={addItem}
              className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#333333] border-solid"
            >
              Add Item
            </button>

            <div className="w-[670px] flex flex-col gap-[50px] items-center">
              <div className="w-full flex flex-col gap-[25px]">
                <div className="w-full flex justify-between">
                  <p className="text-[24px]">Details:</p>
                  <p className="text-[24px]">Quantity:</p>
                </div>

                <div className="flex flex-col gap-[10px]">
                  {items.map((item, index) => (
                    <div key={index} className="w-full flex justify-between">
                      <p className="font-bold">{item.name}</p>
                      <p className="font-bold">x{item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-[15px]"
              >
                <div className="flex gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <p>First Name*</p>
                    <input
                      type="text"
                      className="w-[325px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      value={form.name}
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <p>Last Name*</p>
                    <input
                      type="text"
                      className="w-[325px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                      onChange={(e) =>
                        setForm({ ...form, lastname: e.target.value })
                      }
                      value={form.lastname}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                  <p>Email*</p>
                  <input
                    type="email"
                    className="w-full h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    value={form.email}
                  />
                </div>

                <button
                  type="submit"
                  className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#333333] border-solid mt-[35px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col justify-center items-center px-[135px] py-[50px] gap-[50px]">
          <div className="flex flex-col items-center gap-[25px]">
            <h3>Our Services</h3>
            <p className="w-[770px] text-center">
              Please select the service(s) you wish to be quoted for below.
              Please be mindful that the price listed below is an{" "}
              <span className="font-bold">estimate</span> and not a final quote.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[20px]">
            <div className="flex justify-between items-center gap-[20px]">
              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Strategy Development"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Strategy Development")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Strategy Development"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Strategy Development
                </p>
              </div>

              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Event Management"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Event Management")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Event Management"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Event Management
                </p>
              </div>

              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Media Management"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Media Management")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Media Management"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Media Management
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-[20px]">
              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Publications Design"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Publications Design")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Publications Design"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Publications Design
                </p>
              </div>

              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Brand Identity"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Brand Identity")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Brand Identity"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Brand Identity
                </p>
              </div>

              <div
                className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                  activeOptions["Website"] ? "active" : ""
                }`}
                onClick={() => handleOptions("Website")}
              >
                <p
                  className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                    activeOptions["Website"]
                      ? "text-[#FFFFFF]"
                      : "text-[#333333]"
                  }`}
                >
                  Website
                </p>
              </div>
            </div>

            <div
              className={`group w-[270px] h-[75px] bg-[#F8F9F9] hover:bg-[#222952] cursor-pointer border-[1px] border-[#333333] rounded-[15px] flex items-center justify-center transition-all duration-[300ms] ${
                activeOptions["Digital Media"] ? "active" : ""
              }`}
              onClick={() => handleOptions("Digital Media")}
            >
              <p
                className={`font-bold text-[#333333] group-hover:text-[#FFFFFF] ${
                  activeOptions["Digital Media"]
                    ? "text-[#FFFFFF]"
                    : "text-[#333333]"
                }`}
              >
                Digital Media
              </p>
            </div>
          </div>

          <button
            className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#333333] border-solid"
            onClick={toggleVisibility2}
          >
            Get Quote
          </button>

          {!isHidden2 && (
            <div className="flex flex-col items-center gap-[50px] py-[50px]">
              <h2>Get a Quote</h2>

              <form
                onSubmit={handleSubmit2}
                className="flex flex-col items-center gap-[15px]"
              >
                <div className="flex gap-[20px]">
                  <div className="flex flex-col gap-[10px]">
                    <p>First Name*</p>
                    <input
                      type="text"
                      className="w-[325px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                      onChange={(e) =>
                        setSecondForm({ ...secondForm, name: e.target.value })
                      }
                      value={secondForm.name}
                    />
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <p>Last Name*</p>
                    <input
                      type="text"
                      className="w-[325px] h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                      onChange={(e) =>
                        setSecondForm({
                          ...secondForm,
                          lastname: e.target.value,
                        })
                      }
                      value={secondForm.lastname}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col gap-[10px]">
                  <p>Email*</p>
                  <input
                    type="email"
                    className="w-full h-[40px] bg-[#F8F9F9] rounded-[7.5px] px-[10px]"
                    onChange={(e) =>
                      setSecondForm({ ...secondForm, email: e.target.value })
                    }
                    value={secondForm.email}
                  />
                </div>

                <button
                  type="submit"
                  className="w-[150px] h-[50px] rounded-[25px] border-[1px] border-[#333333] border-solid mt-[35px]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quote;
