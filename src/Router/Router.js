import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import ContactForm from "../components/ContactForm/ContactForm";
import CharactersPage from "../components/CharactersPage/CharactersPage";

export default function Routing() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/characters" element={<CharactersPage />} />
            </Routes>
        </BrowserRouter>
    )
}