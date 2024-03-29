import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "firebase/app";
import "../../firebase";

export default function CreateNote() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);

  const handelClose = () =>{
      setOpen(false);
  };

  const [state, setState] = useState({
    note: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handelSubmitClick = (e) => {
    e.preventDefault();
    console.log(state.note);
    const note = state.note;
    var db = firebase.firestore();
    if (state.note !== "") {
      db.collection("notes")
        .add({
          note: note,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setOpen(true);
          setState((prevState) => ({
            ...prevState,
            note: "",
          }));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <>
      <div className="container" style={{marginTop:"100px"}}>
        <form action="#">
          <TextField
            id="note"
            label="Create a new note ..."
            variant="outlined"
            rows={4}
            fullWidth
            multiline
            onChange={handleChange}
            value={state.note}
          />
          <Button
            variant="contained"
            color="primary"
            className="d-flex ml-auto mt-3 text-capitalize font-weight-bold"
            onClick={handelSubmitClick}
          >
            Create
          </Button>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handelClose}>
          <Alert onClose={handelClose} severity="success">
              Note created successfully!!
          </Alert>
      </Snackbar>
    </>
  );
}
