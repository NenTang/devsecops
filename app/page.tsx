import React from "react";

export const metadata = {
  title: "Workshop Demo DevSecOps",
};

export default function Page() {
  return (
    <>
      <h1 data-testid="test">Xin chào Dương Nguyễn Phú Cường | DevSecOps</h1>
      <p>Đây là đoạn nội dung chức năng 1</p>

      <p className="text-3xl font-bold underline text-blue-500">Hello world!</p>
      <button className="btn btn-primary">Button</button>

      <div className="avatar">
        <div className="mask mask-squircle w-24">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>

      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
      </div>

      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
