const otpStore = {};

function generateOTP(user) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiryTime = Date.now() + 2 * 60 * 1000; // 2 minutes

  otpStore[user] = {
    otp,
    expiryTime,
    attempts: 0,
  };

  console.log(`OTP for ${user}: ${otp}`); // simulate sending OTP

  return otp;
}

function verifyOTP(user, inputOTP) {
  const record = otpStore[user];

  if (!record) {
    return "No OTP generated";
  }

  if (typeof inputOTP !== "string" || !/^\d{6}$/.test(inputOTP)) {
    return "Invalid OTP format";
  }

  if (Date.now() > record.expiryTime) {
    delete otpStore[user];
    return "OTP expired";
  }

  if (inputOTP === record.otp) {
    delete otpStore[user];
    return "OTP verified successfully";
  }

  record.attempts += 1;

  if (record.attempts >= 3) {
    delete otpStore[user];
    return "Too many failed attempts";
  }

  return "Invalid OTP";
}

function resendOTP(user) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiryTime = Date.now() + 2 * 60 * 1000;

  otpStore[user] = {
    otp,
    expiryTime,
    attempts: 0,
  };

  console.log(`New OTP for ${user}: ${otp}`);

  return otp;
}

const user = "tamirat@email.com";

// Generate OTP
const otp = generateOTP(user);

// Try wrong OTP
console.log(verifyOTP(user, "111111"));

// Try correct OTP
console.log(verifyOTP(user, otp));

// Try again after success (should fail)
console.log(verifyOTP(user, otp));

// Resend OTP
const newOtp = resendOTP(user);

// Verify new OTP
console.log(verifyOTP(user, newOtp));
