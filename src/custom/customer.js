import { useEffect, useState, memo, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import "./customer.css";
import axios from "axios";
import { Container } from "react-bootstrap";
import InfoCard from "../components/infoCard/infoCard";

function Customer({ refresh }) {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [newCard, setNewCard] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customer")
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          const parseDate = (dateStr) => {
            const [date, time] = dateStr.split(" - ");
            const [year, month, day] = date.split(".").map(Number);
            const [hour, minute] = (time || "00:00").split(":").map(Number);
            return new Date(year, month - 1, day, hour, minute);
          };
          return parseDate(a.date) - parseDate(b.date);
        });
        setCustomerInfo(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [refresh]);

  const handleDelete = useCallback(
    (id) => {
      axios
        .delete(`http://localhost:5000/customer/${id}`)
        .then(() => {
          setCustomerInfo((prevInfo) =>
            prevInfo.filter((customer) => customer.id !== id)
          );
        })
        .catch((error) => console.error("Error deleting card:", error));
    },
    [customerInfo]
  );

  useEffect(() => {
    if (customerInfo.length > 0) {
      const latestCard = customerInfo[customerInfo.length - 1];
      setNewCard(latestCard);

      setTimeout(() => {
        setNewCard(null);
      }, 5000);
    }
  }, [customerInfo]);

  return (
    <Container>
      <div className="scroll-container">
        {customerInfo.map((customer) => (
          <motion.div
            key={customer.id}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <InfoCard {...customer} onDelete={handleDelete} />
          </motion.div>
        ))}
      </div>

      {newCard &&
        createPortal(
          <motion.div
            initial={{
              scale: 1.5,
              opacity: 1,
              y: "-50%",
              x: "-50%",
              rotate: 0,
            }}
            animate={{
              rotate: [0, 10, -10, 10, -10, 0],
              opacity: [1, 1, 0.5, 0],
              y: ["-50%", "0"],
              x: ["-50%", "0"],
              transition: {
                rotate: { duration: 2, ease: "easeInOut" },
                opacity: { delay: 2, duration: 2 },
                y: { delay: 2, duration: 2, ease: "easeInOut" },
                x: { delay: 2, duration: 2, ease: "easeInOut" }, 
              },
            }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              zIndex: 1000,
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <InfoCard {...newCard} />
          </motion.div>,
          document.getElementById("card-portal")
        )}
    </Container>
  );
}

export default memo(Customer);
