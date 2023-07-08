import Statistic from "../models/statistic.model.js";

export const getStatistic = async (req, res, next) => {
  try {
    const result = await Statistic.
    aggregate([
      {
        $group: {
          _id: {
            cafeteria: "$cafeteria",
            date: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$createdAt" // Replace "dateField" with the actual field containing the date in your collection
              }
            }
          },
          amount: { $sum: "$amount" } // Replace "amountField" with the actual field containing the amount in your collection
        }
      },
      {
        $sort: { "_id.date": 1 }
      },
      {
        $project: {
          cafeteria: "$_id.cafeteria",
          date: "$_id.date",
          amount: 1,
          _id: 0
        }
      }
    ])

    res.send(result)
  } catch (error) {
    next(error);
  }
};
