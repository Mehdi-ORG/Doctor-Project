import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaClinicMedical } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { memo } from "react";

function InfoCard({
  name,
  email,
  number,
  date,
  department,
  doctor,
  notes,
  id,
  onDelete,
}) {
  const deleteHandler = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire({
          title: "حذف نوبت انجام شد",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <Card className="shadow border-0">
      <Card.Body>
        <Card.Title>
          <span> نام بیمار: {name} </span>
        </Card.Title>
        <hr />
        <Card.Text>
          <span className="py-1 d-block">
            <FaUserDoctor color="blue" size="20px" /> نام پزشک: {doctor}
          </span>
          <span className="py-1 d-block">
            <FaHandHoldingMedical color="blue" size="20px" /> تخصص: {department}
          </span>
          <span className="py-1 d-block">
            <MdEmail color="blue" size="20px" /> ایمیل: {email}
          </span>
          <span className="py-1 d-block">
            <IoCallSharp color="blue" size="20px" /> شماره تماس: {number}
          </span>
          <span className="py-1 d-block">
            <BsCalendar2DateFill color="blue" size="20px" /> تاریخ ویزیت: {date}
          </span>
          <span className="py-1 d-block">
            <FaClinicMedical color="blue" size="20px" /> علت مراجعه: {notes}
          </span>
        </Card.Text>
        <Button variant="outline-danger" onClick={deleteHandler}>
          حذف نوبت
        </Button>
      </Card.Body>
    </Card>
  );
}

export default memo(InfoCard);
