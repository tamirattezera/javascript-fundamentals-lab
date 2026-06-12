# OTP Verification System Pseudocode (Final Clean Version)

## STORAGE

CREATE otpStore

Structure:

{
user: {
otp,
expiryTime,
attempts
}
}

## FUNCTION: generateOTP(user)

Generate random 6-digit OTP

Set expiryTime = currentTime + 2 minutes

IF user exists in otpStore THEN
overwrite existing record

Store:

otpStore[user] = {
otp,
expiryTime,
attempts = 0
}

RETURN generated OTP

END FUNCTION

## FUNCTION: verifyOTP(user, inputOTP)

IF user does not exist in otpStore THEN
RETURN "No OTP generated"

Retrieve:
otpData = otpStore[user]

## STEP 1: FORMAT VALIDATION

IF inputOTP is not a 6-digit numeric value THEN
RETURN "Invalid OTP format"

## STEP 2: EXPIRY CHECK

IF currentTime > otpData.expiryTime THEN
DELETE otpStore[user]
RETURN "OTP expired"

## STEP 3: OTP MATCH CHECK

IF inputOTP == otpData.otp THEN
DELETE otpStore[user]
RETURN "OTP verified successfully"

## STEP 4: FAILED ATTEMPT HANDLING

Increment otpData.attempts by 1

IF otpData.attempts >= 3 THEN
DELETE otpStore[user]
RETURN "Too many failed attempts"

RETURN "Invalid OTP"

END FUNCTION

## FUNCTION: resendOTP(user)

Generate new 6-digit OTP

Set new expiryTime = currentTime + 2 minutes

IF user exists in otpStore THEN
overwrite record AND reset attempts = 0

Store:

otpStore[user] = {
otp,
expiryTime,
attempts = 0
}

RETURN new OTP

END FUNCTION
