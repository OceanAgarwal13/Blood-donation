export default function Step3AddressDetails({ data, onChange, onPrev, onNext }) {
  return (
    <form>
      <div className="mb-2">
        <label>Address :</label>
        <input
          type="text"
          name="address"
          placeholder="address"
          className="form-control"
          value={data.address || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

<div className="mb-2">
        <label>Muhalla :</label>
        <input
          type="text"
          name="muhalla"
          placeholder="muhalla"
          className="form-control"
          value={data.muhalla || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-2">
        <label>Location :</label>
        <input
          type="text"
          name="location"
          placeholder="location"
          className="form-control"
          value={data.location || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-2">
        <label>Ward :</label>
        <input
          type="text"
          name="ward"
          placeholder="ward"
          className="form-control"
          value={data.ward || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-2">
        <label>District :</label>
        <input
          type="text"
          name="district"
          placeholder="district"
          className="form-control"
          value={data.district || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-2">
        <label>State :</label>
        <input
          type="text"
          name="state"
          placeholder="state"
          className="form-control"
          value={data.state || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-2">
        <label>Country :</label>
        <input
          type="text"
          name="country"
          placeholder="country"
          className="form-control"
          value={data.country || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-3">
        <label>Pincode :</label>
        <input
          type="text"
          name="pincode"
          placeholder="pincode"
          className="form-control"
          value={data.pincode || ''}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div>
        <button type="button" className="btn btn-secondary" onClick={onPrev}>Back</button>{' '}
        <button type="button" className="btn btn-danger" onClick={onNext}>Next</button>
      </div>
    </form>
  );
}
