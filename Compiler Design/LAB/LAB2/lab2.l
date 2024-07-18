<div className=" w-fit h-[60vh] flex m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent font-poppins border ">
      <div className="flex-1 flex flex-col justify-center border">
        <div className=" flex flex-row">
          <div className="text-[#171717] flex flex-col mt-[17rem] text-[3rem] font-semibold w-fit h-fit border ">
            <h1>Exclusive</h1>
            <h1>Offers for You!</h1>
          </div>
          <p className="text-[#171717] text-2xl font-semibold whitespace-nowrap mr-32 mt-[34rem]">
            ONLY ON BEST SELLERS PRODUCT
          </p>
          <div className="flex flex-row">
            <Button
              value="Check Now"
              className="mt-[6px]  text-white w-[13rem] rounded-xl h-[2rem] p-7 cursor-pointer flex items-center justify-center whitespace-nowrap"></Button>
            <img
              className="h-[20rem] mt-[25rem]"
              src={exclusive_image}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end pt-[50px]"></div>
    </div>
	
	
	 <div className="flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171717]text-[50px] font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />

      <div className="mt-[50px] flex gap-[30px]">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
	
	
	  <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-[140px] mb-[150px] bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent gap-[30px] ">
      <div className="flex items-center justify-between bg-white w-[730x] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3]">
        <h1 className="text-[#454545] font-semibold text-[55px]">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-[#454545] font-semibold text-[20px]">
          Subscribe to our newsletter and stayupdated
        </p>

        <div>
          <input
            className="w-[500px] ml-[30px] border-none outline-none text-[#616161] text-xl"
            type="email"
            placeholder="Your Email id"
          />
          <Button
            className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-xl cursor-pointer "
            value="Subscribe"></Button>
        </div>
      </div>
    </div>
	
	
	 <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[46px] font-semibold">SHOPPER</p>
      </div>
      <div className=" flex list-none gapp-[50px] color-[#252525] text-xl">
        <ul className="cursor-pointer">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-[20px]">
          <div className="p-[10px] bg-[#fbfbfb] pb-[6px] border-[1px] border-[#ebebeb]">
            <img src={instagram_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
            <img src={pintester_icon} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-xl ">
          <hr className="w-[80%] border-none rounded-xl h-[3px] bg-[#c7c7c7]" />
          <p>Copyright @2023 All rights reserved</p>
        </div>
      </div>
    </div>