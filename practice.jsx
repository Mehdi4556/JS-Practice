            //React 18
const [loading, setLoading] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  await saveData();
  setLoading(false);
};              


           //React 19 
async function save(formData) { /* save logic */ }
<form action={save}>
  <button disabled={useFormStatus().pending}>Save</button>
</form>
