import React from "react";
import {
  Stack,
  Grid,
  Row,
  VisuallyHidden,
  Field,
  FieldInput,
  FieldLabel,
  FieldHint,
  Tooltip,
} from "@strapi/design-system";
import { HelpIcon } from "@strapi/icons";

export const EditForm = () => {
  return (
    <>
      <VisuallyHidden>
        <h2>Create a new restaurant form</h2>
      </VisuallyHidden>

      <form>
        <Grid cols="1fr 1fr" rows="auto auto" gap={9}>
          <Field name="email" hint="Imagine all the people">
            <Stack size={1}>
              <Row>
                <FieldLabel>Email</FieldLabel>
                <Tooltip description="As a great poet of the street once said...">
                  <button
                    aria-label="Information about the email"
                    style={{
                      border: "none",
                      background: "transparent",
                      display: "flex",
                    }}
                  >
                    <HelpIcon aria-hidden={true} />
                  </button>
                </Tooltip>
              </Row>
              <FieldInput type="text" placeholder="toto@example.com" />
              <FieldHint />
            </Stack>
          </Field>

          <Field name="address">
            <Stack size={1}>
              <FieldLabel>Address</FieldLabel>
              <FieldInput
                type="text"
                placeholder="16 place of the poet of the street"
              />
            </Stack>
          </Field>

          <Field name="website">
            <Stack size={1}>
              <FieldLabel>Website</FieldLabel>
              <FieldInput
                type="text"
                placeholder="https://poet-of-the-street.io/"
              />
            </Stack>
          </Field>

          <Field name="email">
            <Stack size={1}>
              <FieldLabel>Email</FieldLabel>
              <FieldInput type="text" placeholder="Placeholder" />
            </Stack>
          </Field>
        </Grid>
      </form>
    </>
  );
};
