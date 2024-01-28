import { Permit } from "permitio";

export const permit = new Permit({
  pdp: "https://cloudpdp.api.permit.io",
  token: process.env.PERMIT_SDK_TOKEN,
});