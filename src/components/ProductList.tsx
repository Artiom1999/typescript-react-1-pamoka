// Užduotis: Prekių sąrašo komponentas
// Sukurkite React komponentą, kuris atvaizduoja prekių sąrašą. Kiekviena prekė turi turėti šiuos duomenis:
// Pavadinimą (pvz., "Obuolys", "Bananai"),
// Kainą (pvz., 1.5 €, 2.0 €),
// Boolean reikšmę, kuri nurodo, ar prekė turi nuolaidą.
// Jei prekė turi nuolaidą, komponentas turi atvaizduoti papildomą žalia tekstą: "Prekė yra su nuolaida!".

// Reikalavimai:
// Naudokite TypeScript, kad apibrėžtumėte preke bei komponento Props.
// Perduokite prekių sąrašą kaip props į komponentą.
// Atvaizduokite kiekvieną prekę su jos pavadinimu, kaina ir nuolaida.

interface Item {
  name: any;
  price: any;
  isOnSale: boolean;
}

interface ProductListProps {
  items: Item[];
}

export const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.isOnSale}</p>
        </div>
      ))}
    </ul>
  );
};
