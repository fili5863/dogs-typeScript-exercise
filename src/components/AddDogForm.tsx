import { Dog } from "@/utils/types";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const AddDogForm: React.FC<{ setDogs: Dispatch<SetStateAction<Dog[]>> }> = props => {
  const { setDogs } = props;
  const [name, setName] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [isFuffy, setIsFluffy] = useState<boolean>(false);
  const [age, setAge] = useState<number>();
  const [size, setSize] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDogs(
      old =>
        [
          {
            name: name,
            nicknames: [nickName],
            isFluffy: isFuffy,
            age: age,
            size: size,
          } as Dog,
          ...old,
        ] as Dog[]
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name of Dog
          <input required type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Nickname of Dog
          <input
            required
            type="text"
            value={nickName}
            onChange={e => setNickName(e.target.value)}
          />
        </label>
        <label>
          Fluffy?
          <input type="checkbox" checked={isFuffy} onChange={e => setIsFluffy(e.target.checked)} />
        </label>
        <label>
          Age of dog
          <input
            required
            type="number"
            value={age}
            onChange={e => setAge(e.target.valueAsNumber)}
          />
        </label>
        <label>
          Size of dog
          <select required value={size} onChange={e => setSize(e.target.value)}>
            <option disabled value="">
              Please choose
            </option>
            <option value="tiny">tiny</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="chonky">chonky</option>
          </select>
        </label>
        <input type="submit" value="Submit form" />
      </form>
    </>
  );
};

export default AddDogForm;
