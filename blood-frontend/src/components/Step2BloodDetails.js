export default function Step2BloodDetails({ data, onChange, onNext, onPrev }) {
  return (
    <form>
      <div className="mb-2">
        <label>Blood Group :</label>
        <select name="blood_group" className="form-control" value={data.blood_group} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}>
          <option value="">Select</option>
          <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
          <option>AB+</option><option>AB-</option><option>O+</option><option>O-</option>
        </select>
      </div>
      
      <div className="mb-2">
        <label>RH Factor :</label>
        <select name="rh" className="form-control" value={data.rh} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}>
          <option value="">Select</option>
          <option>+</option><option>-</option>
        </select>
      </div>

      <div className="mb-2">
  <label>Y :</label>
  <select name="y" className="form-control" value={data.y} onChange={onChange} required style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}>
          <option value="">Select</option>
          <option>y</option>
        </select>
</div>

      <div className="mb-2">
        <label>Weight (Kg) :</label>
        <input
          type="number"
          name="weight"
          className="form-control"
          value={data.weight}
          onChange={onChange}
          placeholder="Enter your weight"
          required
          style={{ background: 'wheat', border: '2px solid rgb(100, 4, 92)' }}
        />
      </div>
      <div>
        <button type="button" className="btn btn-secondary me-2" onClick={onPrev}>Back</button>
        <button type="button" className="btn btn-danger" onClick={onNext}>Next</button>
      </div>
    </form>
  );
}
