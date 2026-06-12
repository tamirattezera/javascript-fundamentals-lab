# OTP Verification System - Test Cases

## Normal Cases

### Test Case 1: Generate OTP Successfully

Input:

User: user@email.com

Action:

Generate OTP

Expected Result:

- OTP is generated
- OTP is stored
- Expiry time is set
- Success message returned

Status:

[ ] Pass
[ ] Fail

### Test Case 2: Verify Correct OTP

Input:

Stored OTP: 123456

User Input: 123456

Expected Result:

"OTP Verified successfully"

Status:

[ ] Pass
[ ] Fail

### Test Case 3: Verify Incorrect OTP

Input:

Stored OTP: 123456

User Input: 654321

Expected Result:

"Invalid OTP"

Status:

[ ] Pass
[ ] Fail

### Test Case 4: Multiple Users

Input:

User A OTP: 111111

User B OTP: 222222

Verify User A with 111111

Expected Result:

User A verified successfully

Status:

[ ] Pass
[ ] Fail

## Edge Cases

### Test Case 5: No OTP Generated

Input:

User: newuser@email.com

Verify OTP without generating one

Expected Result:

"No OTP generated"

Status:

[ ] Pass
[ ] Fail

### Test Case 6: OTP Expired

Input:

Stored OTP expired after 2 minutes

Expected Result:

"OTP expired"

Status:

[ ] Pass
[ ] Fail

### Test Case 7: Empty OTP Input

Input:

Stored OTP: 123456

User Input: ""

Expected Result:

"Invalid OTP"

Status:

[ ] Pass
[ ] Fail

### Test Case 8: Null OTP Input

Input:

Stored OTP: 123456

User Input: null

Expected Result:

"Invalid OTP"

Status:

[ ] Pass
[ ] Fail

### Test Case 9: Undefined OTP Input

Input:

Stored OTP: 123456

User Input: undefined

Expected Result:

"Invalid OTP"

Status:

[ ] Pass
[ ] Fail

### Test Case 10: User Generates New OTP

Input:

Generate OTP twice

Expected Result:

Latest OTP replaces old OTP

Only latest OTP is valid

Status:

[ ] Pass
[ ] Fail

### Test Case 11: Single User in System

Input:

One user only

Expected Result:

OTP generation and verification work correctly

Status:

[ ] Pass
[ ] Fail

## Security Cases

### Test Case 12: Reuse OTP After Success

Input:

Verify correct OTP twice

Expected Result:

First verification succeeds

Second verification returns:

"No OTP generated"

Status:

[ ] Pass
[ ] Fail

### Test Case 13: Brute Force Attempts

Input:

Wrong OTP entered 3 times

Expected Result:

OTP invalidated

"Too many failed attempts"

Status:

[ ] Pass
[ ] Fail

### Test Case 14: Verify Another User's OTP

Input:

User A OTP: 123456

User B enters 123456

Expected Result:

Verification fails

Status:

[ ] Pass
[ ] Fail

### Test Case 15: Expired OTP Reuse

Input:

Expired OTP entered

Expected Result:

"OTP expired"

Status:

[ ] Pass
[ ] Fail

### Test Case 16: OTP Length Validation

Input:

123

Expected Result:

"Invalid OTP format"

Status:

[ ] Pass
[ ] Fail

### Test Case 17: Non-Numeric OTP

Input:

ABCDEF

Expected Result:

"Invalid OTP format"

Status:

[ ] Pass
[ ] Fail

### Test Case 18: OTP Tampering

Input:

Stored OTP: 123456

User Input: 123457

Expected Result:

"Invalid OTP"

Status:

[ ] Pass
[ ] Fail

## Performance Cases

### Test Case 19: 100 Active Users

Input:

Generate OTP for 100 users

Expected Result:

All OTPs generated successfully

Status:

[ ] Pass
[ ] Fail

### Test Case 20: 1000 Active Users

Input:

Generate OTP for 1000 users

Expected Result:

System remains responsive

Status:

[ ] Pass
[ ] Fail

## Summary

Key Scenarios Covered:

- OTP generation
- OTP verification
- Expiration handling
- Invalid input handling
- Multiple users
- OTP replacement
- OTP reuse prevention
- Brute-force protection
- Input validation
- Basic performance testing

Engineering Patterns Tested:

- Create
- Store
- Retrieve
- Validate
- Update
- Delete
