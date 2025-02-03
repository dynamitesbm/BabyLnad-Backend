const Newsletter = require("../models/newsletter");

const newsletter = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is Required." });
  }

  try {
    const existingSubscription = await Newsletter.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: "Email is ralready subscribed" });
    }

    const newSubscription = new Newsletter({ email });

    await newSubscription.save();

    res.status(200).json({ message: "Subscription successful" });
  } catch (err) {
    console.error("Error saving subscription:", err);
    res.status(500).json({ message: "Faled to subscribe" });
  }
};

module.exports = newsletter;
