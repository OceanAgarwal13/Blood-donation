export default function Step1BasicDetails({ data, onChange, onNext }) {
  return (
    <form>
      <div className="mb-2">
        <label>Name :</label>
        <input type="text" name="name" placeholder="name" className="form-control" value={data.name} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}/>
      </div>

      <div className="mb-2">
        <label>Father's Name :</label>
        <input type="text" name="father_name" placeholder="father's name" className="form-control" value={data.father_name || ''} onChange={onChange} style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}/>
      </div>

      <div className="mb-2">
        <label>Gender :</label>
        <select name="gender" className="form-control" value={data.gender || ''} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Age :</label>
        <input type="number" name="age" placeholder="age" className="form-control" value={data.age} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}/>
      </div>

    <div className="mb-2">
        <label>Mobile No. :</label>
        <input type="text" name="mobile" placeholder="mobile no." className="form-control" value={data.mobile} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}/>
      </div>

    <div className="mb-2">
  <label>Occupation :</label>
  <input type="text" name="occupation" className="form-control" value={data.occupation || ''} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}} />
</div>

      <button type="button" className="btn btn-danger" onClick={onNext}>
        Next
      </button>
    </form>
  );
}
