"use client";
import { Link } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";

const FormUno = () => {
  const ristoranti = [
    { key: "ristoranteMare", label: "Ristorante di Mare" },
    { key: "ristoranteTerra", label: "Ristorante di Terra" },
    { key: "Paninoteca", label: "Paninoteca" },
    { key: "Pizzeria", label: "Pizzeria" },
    { key: "Sushi", label: "Sushi" },
    { key: "Kebab", label: "Kebab" },
  ];
  return (
    <>
      <div>
        Prima di iniziare, aiutaci a selezionare la migliore esperienza di
        creazione!
      </div>
      <div>Inserisci qualche informazione utile</div>
      <form>
        <input type="text" placeholder="Nome ristorante" />
        <input type="text" placeholder="Numero tavoli" />
        <Select
          items={ristoranti}
          label="Favorite Animal"
          placeholder="Select an animal"
          className="max-w-xs"
        >
          {(ristoranti) => (
            <SelectItem key={ristoranti.key}>{ristoranti.label}</SelectItem>
          )}
        </Select>
        <input type="text" placeholder="Email" />
        <Link href="" type="submit">
          Invia
        </Link>
      </form>
    </>
  );
};

export default FormUno;
