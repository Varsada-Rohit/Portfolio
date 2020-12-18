import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button';

function ContactForm() {
  return (
    <div className="contactForm container my-5">
        <h1>Contact Us</h1>
        <form>
          <div className="row">
           <div className="col-lg-6 col-md-6" >

            <TextField 
                 fullWidth
                 margin="normal"
                required
                id="outlined-required"
                label="Name"
                variant="filled"
            />
           </div>
           <div className="col-lg-6 col-md-6">

            <TextField 
                required
                fullWidth
                 margin="normal"
                id="outlined-required"
                label="Phone"
                variant="filled"
            />
           </div>
           </div>
           <TextField 
                required
                fullWidth
                 margin="normal"
                id="outlined-required"
                label="Message"
                multiline
                rows={4}
                variant="filled"
            />
            <Button variant="contained" color="primary" className="my-3" >
        Send
      </Button>
        </form>
    </div>
  )
}



export default ContactForm;