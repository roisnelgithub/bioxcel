import { Fragment } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { colors } from "../../../const";

const references = [
  {
    id: 1,
    reference:
      "Richmond JS, Berlin JS, Fishkind AB, et al. Verbal de-escalation of the agitated patient: consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. West J Emerg Med. 2012;13(1):17-25. doi:10.5811/westjem.2011.9.6864 ",
  },
  {
    id: 2,
    reference:
      "Martinez-Raga J, Amore M, Di Sciascio G, et al. 1st international experts’ meeting on agitation: conclusions regarding the current and ideal management paradigm of agitation. Front Psychiatry. 2018;9:54. doi:10.3389/fpsyt.2018.00054",
  },
];

const References = () => {
  return (
    <Box
      sx={{
        px: 6,
        py: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack sx={{ width: "100%", maxWidth: "1064px" }}>
        <Stack spacing={1}>
          <Typography
            sx={{
              fontWeight: 700,
              color: colors.TEXT_BLUE,
              fontSize: 14,
            }}
          >
            References:
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: 14, color: colors.TEXT_BLUE }}
          >
            {references.map((item) => {
              const { id, reference } = item;
              return (
                <Fragment key={id}>
                  <Typography
                    component="span"
                    sx={{ fontSize: "14px", fontWeight: 700 }}
                  >
                    {id}.
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "14px" }}>
                    {reference}
                  </Typography>
                </Fragment>
              );
            })}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default References;
