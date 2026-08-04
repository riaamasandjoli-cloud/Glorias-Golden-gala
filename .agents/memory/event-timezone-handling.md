---
name: Event timezone handling
description: The invitation’s event-day behavior must remain anchored to South Africa Standard Time.
---

Event countdown and event-day activation must use explicit `+02:00` timestamps so visitors in other browser timezones see the same event state.

**Why:** The invitation is for a fixed South Africa event time; relying on the visitor’s local timezone could trigger the welcome banner or completion message too early or too late.

**How to apply:** Keep future event-day comparisons and countdown targets expressed as ISO timestamps with the South Africa offset.