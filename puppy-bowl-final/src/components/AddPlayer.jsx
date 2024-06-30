import { useAddPlayerMutation } from "../PuppyBowlApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function NewPlayerForm() {
  const [addPlayer] = useAddPlayerMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      breed: "",
      status: "bench",
      imageUrl: "",
      teamId: null,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    if (!data.teamId) {
      data.teamId = null;
    }
    console.log(data)
    event.preventDefault();
    try {
      addPlayer(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);


  return (
    <div className="form">
    <h2>Player Sign-Up Form</h2>
    <form id="new-player-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input name="name" {...register("name")} />
      </label>
      <label>
        Breed:
        <input name="breed" {...register("breed")} />
      </label>
      <label>
        Image:
        <input name="imageUrl" {...register("imageUrl")} />
      </label>
      <button className="buttonS" type="submit">Submit</button>
      </form>
      </div>
  )};
        