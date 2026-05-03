# Lab 5 - Starter

**Name:** Evan Marriott

**GitHub Pages:**
- [expose.html](https://evangmarriott.github.io/CSE110-Lab5/expose.html)
- [explore.html](https://evangmarriott.github.io/CSE110-Lab5/explore.html)

---

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No. The "message" feature involves multiple interacting components — the UI, a network request, a backend server, and a database — so it cannot be meaningfully tested in isolation. A unit test is designed to test a single, self-contained piece of logic. Testing the full send-message flow requires an integration or end-to-end test that exercises all those layers together.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes. The max message length logic is a single, isolated function: given a string, return whether its length is within the allowed limit. There are no external dependencies, network calls, or side effects. This is exactly the kind of pure, deterministic behavior that unit tests are designed to verify quickly and reliably.
