import SSLCommerz from "sslcommerz-nodejs";
import dotenv from "dotenv";

dotenv.config();

const settings = {
  isSandboxMode: true, //false if live version
  store_id: process.env.SSL_ID,
  store_passwd: process.env.SSL_PASS,
};

const sslCommerz = new SSLCommerz(settings);

const makeTransactionID = (length) => {
  let result = [];
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678901234567890123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
};

export const makePayment = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const transactionId = makeTransactionID(20);

    const transactionResponse = await sslCommerz.init_transaction({
      product_name: "Food",
      product_category: "Food",
      product_profile: "Food product",
      total_amount: data.amount || 100,
      num_of_item: data.totalItem || 5,
      currency: "BDT",
      cus_city: data.city,
      cus_add1: data.address,
      cus_country: "Bangladesh",
      cus_email: data.email,
      cus_phone: data.phone,
      shipping_method: "NO",
      tran_id: transactionId,
      success_url: "http://localhost:3000/payment-success",
    });

    // res.redirect(transactionResponse);
    res.send(transactionResponse);
    console.log(transactionResponse);
  } catch (error) {
    next(error);
  }
};
