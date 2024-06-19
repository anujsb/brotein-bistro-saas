import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // Updated selectedPlan field with the new plan names
    selectedPlan: {
      type: String,
      enum: [
        "Basic Mini Bowl",
        "Two Times Mini Bowl",
        "Premium",
        "Platinum",
        "150 Grams Protein Source",
        "200 Grams Protein Source"
      ],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    selectedBranch: {
      type: String,
      enum: ["nashik-1", "nashik-2"],
      required: true,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
