import { useState } from 'react';

export default function Step4Password({ data, onChange, onPrev, onSubmit }) {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError('');
      onSubmit(e); // call parent's onSubmit
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Create Password:</label>
        <input
          type="password"
          name="password"
          placeholder='password'
          className="form-control"
          value={data.password}
          onChange={onChange}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder='confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{background:'wheat', border:'2px solid rgb(100, 4, 92)'}}
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div>
        <button type="button" onClick={onPrev} className="btn btn-secondary">Back</button>{'    '}
        <button type="submit" className="btn btn-danger">Register</button>
      </div>
    </form>
  );
}
