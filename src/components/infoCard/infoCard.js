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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const deleteHandler = () => {
    Swal.fire({
      title: t("messages.deleteConfirm.title"),
      text: t("messages.deleteConfirm.text"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t("messages.deleteConfirm.confirm"),
      cancelButtonText: t("messages.deleteConfirm.cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire({
          title: t("messages.deleteSuccess.title"),
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
          <span>
            {t("panel.patientName")}: {name}
          </span>
        </Card.Title>
        <hr />
        <Card.Text>
          <span className="py-1 d-block">
            <FaUserDoctor color="blue" size="20px" /> {t("panel.doctor")}:{" "}
            {doctor}
          </span>
          <span className="py-1 d-block">
            <FaHandHoldingMedical color="blue" size="20px" />{" "}
            {t("panel.department")}: {department}
          </span>
          <span className="py-1 d-block">
            <MdEmail color="blue" size="20px" /> {t("common.email")}: {email}
          </span>
          <span className="py-1 d-block">
            <IoCallSharp color="blue" size="20px" /> {t("common.phone")}:{" "}
            {number}
          </span>
          <span className="py-1 d-block">
            <BsCalendar2DateFill color="blue" size="20px" />{" "}
            {t("panel.appointmentDate")}: {date}
          </span>
          <span className="py-1 d-block">
            <FaClinicMedical color="blue" size="20px" /> {t("panel.reason")}:{" "}
            {notes}
          </span>
        </Card.Text>
        <Button variant="outline-danger" onClick={deleteHandler}>
          {t("panel.deleteAppointment")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default memo(InfoCard);
