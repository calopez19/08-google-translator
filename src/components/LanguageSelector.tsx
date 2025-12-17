import Form from "react-bootstrap/Form";
import { SOPORTED_LANGUAGES } from "../constants";
import React, { type FC } from "react";
import type { Language } from "../assets/types";

interface Props {
  onChange: (lenguage: Language) => void;
}

export const LanguageSelector: FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select aria-label="Selecciona el idioma" onChange={handleChange}>
      <option>Selecciona el idioma</option>
      {Object.entries(SOPORTED_LANGUAGES).map(([key, literal]) => {
        return (
          <option key={key} value={key}>
            {literal}
          </option>
        );
      })}
    </Form.Select>
  );
};
