# OTP Verification System

## Problem Statement

Build a system that generates a one-time password (OTP) for a user and verifies the OTP entered by the user.

## Why does this system exist?

OTP (One-Time Paassword) exists because:
A password alone is often not enough to peove identity.
OTP adds a second layer of verification.

## Inputs

### Generate OTP

- User identifier (email or phone number)

### Verify OTP

- User identifier
- OTP entered by user
- Stored OTP
- Current time

## Outputs

### OTP Generation

- Generated 6-digit OTP

### OTP Verification

- "OTP verified"
- "Invalid OTP"
- "OTP expired"
- "OTP not found"

## Constraints
- OTP must be 6 digits
- OTP should be random
- OTP expires after 2 minutes
- OTP must match exactly
- OTP can only be used once


# Identify Patterns
## Pattern 1: Random generation
- generate secure random number

## Pattern 2: State Storage 
- Store OTP for each user
- Store expiration time
- Retrieve OTP later during verification
## Pattern 3: Comparsion
- user OTP vs system OTP
## Pattern 4; Time-Based validation
- checks expiry time

# Choose Data Structure

We need to store OTP data per user.

Data Structure:
Object (key-value map)

Example:

{
  "alice@example.com": {
      otp: 483921,
      expiresAt: 1753000000000
  },

  "bob@example.com": {
      otp: 719452,
      expiresAt: 1753000050000
  }
}

Reason:

- Fast lookup by user identifier
- Easy to store OTP and expiration together
- Simple structure for a small project
## Real-world examples

* User login verification
* Password reset
* Two-factor authentication (2FA)
* Banking transaction confirmation

## Goal

Generate an OTP and verify it correctly before it expires.

