import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1000,
    name: "Pet 1",
    animal: "dog",
    description: "This is a dog",
    breed: "Pug",
    images: [],
    city: "New York",
    state: "NY",
  },
  () => {},
]);

export default AdoptedPetContext;
