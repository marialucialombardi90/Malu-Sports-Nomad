import { body } from "express-validator";

export const validateBooking = [
  // body("user").notEmpty().withMessage("User ID is required"),
  body("facility").notEmpty().withMessage("Facility ID is required"),
  body("booked_for")
    .notEmpty()
    .withMessage("Booked date is required")
    .isISO8601()
    .toDate(),
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number"),
  body("status")
    .optional()
    .isIn(["pending", "confirmed", "declined"])
    .withMessage(
      "Status must be one of the following: pending, confirmed, declined"
    ),
  body("decline_reason")
    .optional()
    .notEmpty()
    .withMessage("Decline reason is required if status is 'declined'")
    .custom((value, { req }) => {
      if (req.body.status === "declined" && !value) {
        throw new Error("Decline reason is required if status is 'declined'");
      }
      return true;
    }),
];
