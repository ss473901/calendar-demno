import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useState } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function App() {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>スケジュールを追加</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>スケジュールを追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="イベントのタイトル"
            />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                console.log(selectedDate);
                const dateStr = format(selectedDate, "yyyy-MM-dd");
                setEvents([...events, { title: eventTitle, date: dateStr }]);
                onClose();
                setEventTitle("");
                setSelectedDate(new Date());
              }}
            >
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </ChakraProvider>
  );
}

export default App;
