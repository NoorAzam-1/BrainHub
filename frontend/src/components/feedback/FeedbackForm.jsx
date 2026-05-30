"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback, updateFeedback } from "@/features/feedbackSlice";

export default function FeedbackForm({ editData, setEditData }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(() => {
    return {
      name: editData?.name || "",
      email: editData?.email || "",
      contactNo: editData?.contactNo || "",
      feedback: editData?.feedback || "",
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(updateFeedback({ id: editData._id, data: form }));
      setEditData(null);
    } else {
      dispatch(addFeedback(form));
    }

    setForm({
      name: "",
      email: "",
      contactNo: "",
      feedback: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-5 md:p-6 rounded-3xl border border-white/60 mb-6">
      <h2 className="text-xl font-bold mb-4 text-on-surface">
        {editData ? "Edit Feedback" : "Add Feedback"}
      </h2>

      <label className="label">Name</label>
      <input
        className="input mb-3"
        placeholder="Name"
        value={form.name}
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <label className="label">Email</label>
      <input
        className="input mb-3"
        placeholder="Email"
        value={form.email}
        required
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <label className="label">Contact Number</label>
      <input
        className="input mb-3"
        placeholder="Contact No"
        value={form.contactNo}
        required
        onChange={(e) =>
          setForm({ ...form, contactNo: e.target.value })
        }
      />

      <label className="label">Your Feedback</label>
      <textarea
        className="input mb-3 min-h-28"
        placeholder="Feedback"
        value={form.feedback}
        required
        onChange={(e) =>
          setForm({ ...form, feedback: e.target.value })
        }
      />

      <button className="btn btn-primary px-5 py-3 rounded-2xl w-full sm:w-auto">
        {editData ? "Update" : "Submit"}
      </button>
    </form>
  );
}
