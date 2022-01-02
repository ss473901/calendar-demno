import { useState } from "react";
//FullCalendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
//chakura
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//date-fns
import { format } from "date-fns";

function App() {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </ChakraProvider>
  );
}

export default App;
