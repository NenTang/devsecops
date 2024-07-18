import React from "react";

export const metadata = {
  title: "Workshop Demo DevSecOps",
};

export default function Page() {
  return (
    <>
      <div className="container mx-auto">
        <h1 data-testid="test" className="font-bold text-center text-3xl p-4">Xin chào Dương Nguyễn Phú Cường | DevSecOps</h1>

        <div className="card glass">
          <figure>
            <img
              src="/img/workshop-devsecops-bao-mat-va-van-hanh-he-thong-dnpcuong-nentang.vn.png"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Báo cáo DevSecOps</h2>
            <p>
              Thế nào là DevSecOps? Bảo mật có quan trọng trong công việc của
              bạn hay không?
            </p>
            <h3>Chuyên đề về DevSecOps</h3>
            <ul className="list-disc">
              <li>Thời gian: 14h00 ~ 15h30 ngày 19/07/2024 (Thứ Sáu)</li>
              <li>
                Địa chỉ: Khu III - Đại học Cần Thơ; Số 01 Lý Tự Trọng, Quận Ninh Kiều, TP Cần Thơ
              </li>
              <li>Diễn giả: Dương Nguyễn Phú Cường</li>
              <li>Email: phucuong@ctu.edu.vn, nentangtoituonglai@gmail.com</li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Đón xem nhé!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
