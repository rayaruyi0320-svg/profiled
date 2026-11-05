// Letter-alias demo snapshot.
window.CATALOG = {
  "topics": [
    {
      "id": "q1",
      "title": "In a group",
      "domain": 0,
      "permission": "Q37_2",
      "fields": [
        "Q1_1",
        "Q1_2",
        "Q1_3",
        "Q1_4"
      ]
    },
    {
      "id": "q2",
      "title": "Someone close bothers me",
      "domain": 1,
      "permission": "Q37_3",
      "fields": [
        "Q3_1",
        "Q3_2",
        "Q3_3",
        "Q3_4"
      ]
    },
    {
      "id": "q3",
      "title": "When overloaded",
      "domain": 2,
      "permission": "Q37_4",
      "fields": [
        "Q5_1",
        "Q5_2",
        "Q5_3"
      ]
    },
    {
      "id": "q4",
      "title": "Making something",
      "domain": 3,
      "permission": "Q37_5",
      "fields": [
        "Q6_1",
        "Q6_2"
      ]
    },
    {
      "id": "q5",
      "title": "When a friend is upset",
      "domain": 1,
      "permission": "Q37_6",
      "fields": [
        "Q9a",
        "Q9b",
        "Q9a_7_TEXT",
        "Q9b_7_TEXT"
      ]
    },
    {
      "id": "q6",
      "title": "An exhausting favour",
      "domain": 2,
      "permission": "Q37_7",
      "fields": [
        "Q12a",
        "Q12b",
        "Q12a_7_TEXT",
        "Q12b_7_TEXT"
      ]
    },
    {
      "id": "q7",
      "title": "Interests & small joys",
      "domain": 3,
      "permission": "Q37_1",
      "fields": [
        "Q16_1",
        "Q16_2",
        "Q16_3",
        "Q18",
        "Q19",
        "Q19_8_TEXT",
        "Q41"
      ]
    },
    {
      "id": "q8",
      "title": "What remained unseen",
      "domain": 4,
      "permission": "Q37_8",
      "fields": [
        "Q17a_1",
        "Q17a_2",
        "Q17a_3",
        "Q17b",
        "Q17b_7_TEXT"
      ]
    },
    {
      "id": "q21",
      "title": "Before / Becoming",
      "domain": 5,
      "permission": "Q37_10",
      "fields": [
        "Q21_1",
        "Q21_2"
      ]
    },
    {
      "id": "q22",
      "title": "A feared pattern",
      "domain": 5,
      "permission": "Q37_9",
      "fields": [
        "Q22"
      ]
    },
    {
      "id": "q42",
      "title": "A chosen story",
      "domain": 6,
      "permission": null,
      "fields": [
        "Q42"
      ]
    }
  ],
  "domains": [
    "In Groups",
    "With People Close to Me",
    "When I’m Stretched",
    "Making & Enjoying",
    "What Others See",
    "Change Over Time",
    "Chosen Stories"
  ],
  "prompts": {
    "Q1_1": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction - What I usually do now",
    "Q1_2": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction - What I'd prefer to do",
    "Q1_3": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction - What people usually expect from me",
    "Q1_4": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction - What I think people usually see me doing",
    "Q3_1": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly - What I usually do",
    "Q3_2": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly - What I'd prefer to do",
    "Q3_3": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly - What I feel expected to do",
    "Q3_4": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly - What people close to me probably think I do",
    "Q5_1": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help - What I usually do",
    "Q5_2": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help - What I'd prefer to do",
    "Q5_3": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help - What I feel expected to do",
    "Q6_1": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now",
    "Q6_2": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer",
    "Q9a": "A friend tells you they are upset. What do you usually do in response? Choose up to two. - Selected Choice",
    "Q9a_7_TEXT": "A friend tells you they are upset. What do you usually do in response? Choose up to two. - Something else - Text",
    "Q9b": "When a friend is upset, which responses do you wish came more naturally to you? Choose up to two. - Selected Choice",
    "Q9b_7_TEXT": "When a friend is upset, which responses do you wish came more naturally to you? Choose up to two. - Something else - Text",
    "Q12a": "You are exhausted, and someone you care about asks for a time-consuming favor. What would you probably do? Choose up to two. - Selected Choice",
    "Q12a_7_TEXT": "You are exhausted, and someone you care about asks for a time-consuming favor. What would you probably do? Choose up to two. - other - Text",
    "Q12b": "In that same situation — exhausted, with someone asking for a favor — what do you feel you should do? Choose up to two. - Selected Choice",
    "Q12b_7_TEXT": "In that same situation — exhausted, with someone asking for a favor — what do you feel you should do? Choose up to two. - other - Text",
    "Q16_1": "What have you been enjoying or returning to lately? Name up to three activities, works, places, or small habits. Keywords are enough. - Interest or small joy 1",
    "Q16_2": "What have you been enjoying or returning to lately? Name up to three activities, works, places, or small habits. Keywords are enough. - Interest or small joy 2 (optional)",
    "Q16_3": "What have you been enjoying or returning to lately? Name up to three activities, works, places, or small habits. Keywords are enough. - Interest or small joy 3 (optional)",
    "Q18": "Choose one of the things you have been enjoying or returning to. What is it? A name or a few words are enough.",
    "Q19": "What keeps drawing you back to this? Choose up to two. - Selected Choice",
    "Q19_8_TEXT": "What keeps drawing you back to this? Choose up to two. - Something else - Text",
    "Q41": "Optional: add one concrete detail about your chosen interest. You could describe a moment when it felt especially like you, or something you keep doing even when nobody notices or rewards it. One sentence is enough.",
    "Q17a_1": "Think of a recent moment when what others could see did not tell the whole story. Short phrases are enough: what was happening; what I did or showed; what remained unseen. You may skip this. - What was happening (context / roughly when)",
    "Q17a_2": "Think of a recent moment when what others could see did not tell the whole story. Short phrases are enough: what was happening; what I did or showed; what remained unseen. You may skip this. - What I did or showed",
    "Q17a_3": "Think of a recent moment when what others could see did not tell the whole story. Short phrases are enough: what was happening; what I did or showed; what remained unseen. You may skip this. - What remained unseen",
    "Q17b": "What shaped your response in that moment? Choose up to two. - Selected Choice",
    "Q17b_7_TEXT": "What shaped your response in that moment? Choose up to two. - Something else - Text",
    "Q20": "Would you like to explore one of your answers a little further? You can choose a difference between your answers, or simply an answer that matters to you. No difference needs an explanation.",
    "Q21_1": "What is one small change you have noticed in yourself recently? Complete: Before… / Now I am beginning to… . Short phrases are enough. If no change comes to mind, you can say so or skip. - Before",
    "Q21_2": "What is one small change you have noticed in yourself recently? Complete: Before… / Now I am beginning to… . Short phrases are enough. If no change comes to mind, you can say so or skip. - Now I am beginning to",
    "Q22": "Is there a way of living or responding that you worry about becoming stuck in? One sentence is enough. You may skip this.",
    "Q42": "Optional — a story you choose to explore. You may add as many stories as you wish, or continue without one. Choose only what you feel ready to share. Short phrases are enough; please leave out names and identifying details.",
    "FU1": "You chose to say a little more. One possible starting point is [Field-PD_Context1]. What would you like someone to understand about this answer or difference? You may choose a different answer instead; please name it. One sentence is enough, and you do not need to repeat a story you already shared.",
    "FU2": "If expectations are part of the answer you chose to discuss, where do they come from? Select any that fit, or skip. - Selected Choice",
    "FU2_9_TEXT": "If expectations are part of the answer you chose to discuss, where do they come from? Select any that fit, or skip. - other - Text",
    "FU3": "For the answer you chose to discuss, is there anything that your impression of how others see you leaves out? One sentence is enough; skip if you have already covered it.",
    "Q23": "Which topics would you like your portrait to foreground? Choose up to two. This sets emphasis, not sharing permission. Your earlier answers appear below as reminders; blank values mean no answer, not zero. Additional story cards keep their own permissions.",
    "Q24": "Which topics would you feel comfortable being asked about by another participant? Select any, or leave blank for no conversation invitations. This does not by itself give permission to display your answers.",
    "Q37_1": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - Interests — what I named: [QID24-ChoiceTextEntryValue-1]; [QID24-ChoiceTextEntryValue-2]; [QID24-ChoiceTextEntryValue-3]",
    "Q37_2": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When a group had no clear direction — wait/support (0) to step in (100). My usual: [QID3-ChoiceNumericEntryValue-1]; preferred: [QID3-ChoiceNumericEntryValue-2]",
    "Q37_3": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When someone close bothered me — hold back (0) to name the problem (100). My usual: [QID5-ChoiceNumericEntryValue-1]; preferred: [QID5-ChoiceNumericEntryValue-2]",
    "Q37_4": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When overloaded — handle privately (0) to ask for help (100). My usual: [QID7-ChoiceNumericEntryValue-1]; preferred: [QID7-ChoiceNumericEntryValue-2]",
    "Q37_5": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When creating without one correct outcome — structure first (0) to follow possibilities (100). My usual: [QID8-ChoiceNumericEntryValue-1]; preferred: [QID8-ChoiceNumericEntryValue-2]",
    "Q37_6": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When a friend was upset — my usual responses: [QID11-ChoiceGroup-SelectedChoices]",
    "Q37_7": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - When exhausted and asked for a favor — my likely responses: [QID17-ChoiceGroup-SelectedChoices]",
    "Q37_8": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - The earlier moment when others could not see the whole story — [QID25-ChoiceTextEntryValue-1]",
    "Q37_9": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - The pattern I worried about becoming stuck in — [QID31-ChoiceTextEntryValue]",
    "Q37_10": "How may each earlier topic be used in this pilot? Choose one option per topic. Blank means researcher only. These choices cover the earlier answers and their follow-ups; additional story cards retain the separate permissions you chose on each card. Blank reminder values mean no answer, not zero. You will review generated summaries and connections before they are shown to another participant. Public website or exhibition use is not included. - My recent change — before: [QID30-ChoiceTextEntryValue-1]; beginning to: [QID30-ChoiceTextEntryValue-2]",
    "Q38": "Would you be open to reviewing selected material for a future public website? This is an expression of interest, not permission to publish. Any public use would need your separate approval of the actual material.",
    "Q39": "Would you be open to reviewing selected material for a future exhibition, including a comparison with another participant? This is an expression of interest, not permission to exhibit. You would separately approve the material and how it is presented.",
    "Q40": "What nickname would you like to use on your portrait? Optional; it does not need to be your real name. Leave blank to use a participant code."
  },
  "people": [
    {
      "id": "p01",
      "name": "Participant A",
      "answers": {
        "Q1_1": "",
        "Q1_2": "100",
        "Q1_3": "",
        "Q1_4": "",
        "Q3_1": "",
        "Q3_2": "",
        "Q3_3": "",
        "Q3_4": "",
        "Q5_1": "",
        "Q5_2": "",
        "Q5_3": "",
        "Q6_1": "",
        "Q6_2": "",
        "Q9a": "Give them space,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding",
        "Q9b_7_TEXT": "",
        "Q12a": "offer a smaller version of what they're asking,decide based on who is asking",
        "Q12a_7_TEXT": "",
        "Q12b": "say yes",
        "Q12b_7_TEXT": "",
        "Q16_1": "piano",
        "Q16_2": "singing",
        "Q16_3": "",
        "Q18": "",
        "Q19": "A memory associated with it,Having breathing space",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "My own needs,The role I was in",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "",
        "Q21_2": "",
        "Q22": "",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790002068030_0\",\"title\":\"\",\"domain\":\"\",\"context\":\"\",\"selves\":{\"becoming\":\"\"},\"permission\":\"researcher_only\",\"invitation\":\"no\"}]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "",
        "Q24": "",
        "Q37_1": "",
        "Q37_2": "",
        "Q37_3": "",
        "Q37_4": "",
        "Q37_5": "",
        "Q37_6": "",
        "Q37_7": "",
        "Q37_8": "",
        "Q37_9": "",
        "Q37_10": "",
        "Q38": "",
        "Q39": "",
        "Q40": "Participant A"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant A",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": null,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 100,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": null,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": null,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "",
            "Q1_2": "100",
            "Q1_3": "",
            "Q1_4": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q3_1": "",
            "Q3_2": "",
            "Q3_3": "",
            "Q3_4": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q5_1": "",
            "Q5_2": "",
            "Q5_3": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q6_1": "",
            "Q6_2": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant A",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "space"
                ],
                "field": "Q9a",
                "raw": "Give them space,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen"
                ],
                "field": "Q9b",
                "raw": "Listen before responding",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Give them space,It depends on the situation",
            "Q9b": "Listen before responding",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant A",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "smaller",
                  "depends"
                ],
                "raw": "offer a smaller version of what they're asking,decide based on who is asking",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "yes"
                ],
                "raw": "say yes",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "offer a smaller version of what they're asking,decide based on who is asking",
            "Q12b": "say yes",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant A",
            "interests": [
              {
                "id": "p01-interest-1",
                "text": "piano",
                "field": "Q16_1",
                "motif": "keyboard",
                "depthThickness": 0.25,
                "reasonStatus": "unassigned",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p01-interest-2",
                "text": "singing",
                "field": "Q16_2",
                "motif": "microphone",
                "depthThickness": 0.25,
                "reasonStatus": "unassigned",
                "reasons": [],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "piano",
            "Q16_2": "singing",
            "Q16_3": "",
            "Q18": "",
            "Q19": "A memory associated with it,Having breathing space",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "My own needs,The role I was in",
            "Q17b_7_TEXT": ""
          },
          "status": "skipped",
          "scope": "Researcher only (blank)",
          "note": "The event description was skipped. The selected Q17b factors remain in the source record, but no event visual is drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q21_1": "",
            "Q21_2": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q22": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790002068030_0\",\"title\":\"\",\"domain\":\"\",\"context\":\"\",\"selves\":{\"becoming\":\"\"},\"permission\":\"researcher_only\",\"invitation\":\"no\"}]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [],
      "invitations": []
    },
    {
      "id": "p02",
      "name": "Participant B",
      "answers": {
        "Q1_1": "85",
        "Q1_2": "79",
        "Q1_3": "67",
        "Q1_4": "50",
        "Q3_1": "40",
        "Q3_2": "68",
        "Q3_3": "75",
        "Q3_4": "38",
        "Q5_1": "20",
        "Q5_2": "50",
        "Q5_3": "50",
        "Q6_1": "62",
        "Q6_2": "63",
        "Q9a": "Listen before responding,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Offer advice",
        "Q9b_7_TEXT": "",
        "Q12a": "offer a smaller version of what they're asking,delay answering",
        "Q12a_7_TEXT": "",
        "Q12b": "say yes, but feel frustrated,offer a smaller version of what they're asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "planning to travel",
        "Q16_2": "sleep",
        "Q16_3": "拼豆好玩（不知道英语",
        "Q18": "delicious food！",
        "Q19": "Enjoying the process,I simply enjoy it",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "朋友拼豆刚拼完一个个超大图然后手滑打翻了！",
        "Q17a_2": "我马上安慰了她！但是感觉有些无力",
        "Q17a_3": "我很懵逼",
        "Q17b": "A responsibility,Uncertainty",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — something about what I do and what I would prefer",
        "Q21_1": "我不会卷头发",
        "Q21_2": "我买了新的直板夹学习发型中",
        "Q22": "找不到工作咋办！",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "一半一半吧，如果事情很紧急我会找人帮忙！不急的话尽量自己做！",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "When creating without one correct outcome — structure first (0) to follow possibilities (100). My usual: ${q://QID8/ChoiceNumericEntryValue/1}; preferred: ${q://QID8/ChoiceNumericEntryValue/2},When exhausted and asked for a favor — my likely responses: ${q://QID17/ChoiceGroup/SelectedChoices}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},The pattern I worried about becoming stuck in — ${q://QID31/ChoiceTextEntryValue}",
        "Q37_1": "",
        "Q37_2": "",
        "Q37_3": "",
        "Q37_4": "",
        "Q37_5": "",
        "Q37_6": "",
        "Q37_7": "",
        "Q37_8": "",
        "Q37_9": "",
        "Q37_10": "",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant B"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 85,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 79,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 67,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 50,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "85",
            "Q1_2": "79",
            "Q1_3": "67",
            "Q1_4": "50"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 40,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 68,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 75,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 38,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "40",
            "Q3_2": "68",
            "Q3_3": "75",
            "Q3_4": "38"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 20,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 50,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 50,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "20",
            "Q5_2": "50",
            "Q5_3": "50"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 62,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 63,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "62",
            "Q6_2": "63"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "advice"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Offer advice",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,It depends on the situation",
            "Q9b": "Listen before responding,Offer advice",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "smaller",
                  "delay"
                ],
                "raw": "offer a smaller version of what they're asking,delay answering",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "smaller",
                  "frustrated"
                ],
                "raw": "say yes, but feel frustrated,offer a smaller version of what they're asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "offer a smaller version of what they're asking,delay answering",
            "Q12b": "say yes, but feel frustrated,offer a smaller version of what they're asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant B",
            "interests": [
              {
                "id": "p02-interest-1",
                "text": "planning to travel",
                "field": "Q16_1",
                "motif": "folded-map",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p02-interest-2",
                "text": "sleep",
                "field": "Q16_2",
                "motif": "pillow",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p02-interest-3",
                "text": "拼豆好玩（不知道英语",
                "displayGloss": "fuse-bead crafting",
                "field": "Q16_3",
                "motif": "fuse-beads",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p02-interest-4",
                "text": "delicious food！",
                "field": "Q18",
                "motif": "food-plate",
                "depthThickness": 0.25,
                "reasonStatus": "described",
                "reasons": [
                  "Enjoying the process",
                  "I simply enjoy it"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "planning to travel",
            "Q16_2": "sleep",
            "Q16_3": "拼豆好玩（不知道英语",
            "Q18": "delicious food！",
            "Q19": "Enjoying the process,I simply enjoy it",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant B",
            "context": "朋友拼豆刚拼完一个个超大图然后手滑打翻了！",
            "contextGeometry": "incident",
            "shown": "我马上安慰了她！但是感觉有些无力",
            "unseen": "我很懵逼",
            "influences": "A responsibility,Uncertainty",
            "source": "Q17a_1–3 · Q17b"
          },
          "raw": {
            "Q17a_1": "朋友拼豆刚拼完一个个超大图然后手滑打翻了！",
            "Q17a_2": "我马上安慰了她！但是感觉有些无力",
            "Q17a_3": "我很懵逼",
            "Q17b": "A responsibility,Uncertainty",
            "Q17b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant B",
            "before": "我不会卷头发",
            "now": "我买了新的直板夹学习发型中",
            "channel": "engagement",
            "beforeLevel": "low",
            "nowLevel": "high",
            "evidence": "Unable to curl hair → beginning to practise with a new tool. Activity is not skill mastery.",
            "review": "Clear beginning; metaphor needs review",
            "scope": "Researcher only (blank Q37_10)"
          },
          "raw": {
            "Q21_1": "我不会卷头发",
            "Q21_2": "我买了新的直板夹学习发型中"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant B",
            "answer": "找不到工作咋办！",
            "category": "unresolvedDestination",
            "evidence": "The response asks what happens if a future job is not found. An open path and its terminal fan express an unresolved next destination, without claiming anything about employability or predicting an outcome.",
            "scope": "Researcher only (blank Q37_9)"
          },
          "raw": {
            "Q22": "找不到工作咋办！"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q4",
        "q6"
      ],
      "invitations": [
        "q7",
        "q22"
      ]
    },
    {
      "id": "p03",
      "name": "Participant C",
      "answers": {
        "Q1_1": "49",
        "Q1_2": "76",
        "Q1_3": "37",
        "Q1_4": "22",
        "Q3_1": "30",
        "Q3_2": "46",
        "Q3_3": "91",
        "Q3_4": "27",
        "Q5_1": "38",
        "Q5_2": "33",
        "Q5_3": "78",
        "Q6_1": "25",
        "Q6_2": "75",
        "Q9a": "Listen before responding,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Offer advice",
        "Q9b_7_TEXT": "",
        "Q12a": "offer a smaller version of what they're asking,delay answering",
        "Q12a_7_TEXT": "",
        "Q12b": "delay answering,decide based on who is asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "呀米呀米的食物",
        "Q16_2": "减少的赘肉",
        "Q16_3": "音乐",
        "Q18": "吃东西",
        "Q19": "Enjoying the process,Discovering new things",
        "Q19_8_TEXT": "",
        "Q41": "减肥而穿上美美的衣服",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — something about expectations or what I feel I should do",
        "Q21_1": "焦虑",
        "Q21_2": "行动",
        "Q22": "回避",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "family,friends / peers,a role I usually take on,broader social / cultural expectations",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "The pattern I worried about becoming stuck in — ${q://QID31/ChoiceTextEntryValue},My recent change — before: ${q://QID30/ChoiceTextEntryValue/1}; beginning to: ${q://QID30/ChoiceTextEntryValue/2}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3}",
        "Q37_1": "Researcher only; exclude from portrait",
        "Q37_2": "Researcher only; exclude from portrait",
        "Q37_3": "Researcher only; exclude from portrait",
        "Q37_4": "Researcher only; exclude from portrait",
        "Q37_5": "Researcher only; exclude from portrait",
        "Q37_6": "Researcher only; exclude from portrait",
        "Q37_7": "Researcher only; exclude from portrait",
        "Q37_8": "Researcher only; exclude from portrait",
        "Q37_9": "Researcher only; exclude from portrait",
        "Q37_10": "Researcher only; exclude from portrait",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant C"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 49,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 76,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 37,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 22,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "49",
            "Q1_2": "76",
            "Q1_3": "37",
            "Q1_4": "22"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 30,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 46,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 91,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 27,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "30",
            "Q3_2": "46",
            "Q3_3": "91",
            "Q3_4": "27"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 38,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 33,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 78,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "38",
            "Q5_2": "33",
            "Q5_3": "78"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 25,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 75,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "25",
            "Q6_2": "75"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "advice"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Offer advice",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,It depends on the situation",
            "Q9b": "Listen before responding,Offer advice",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "smaller",
                  "delay"
                ],
                "raw": "offer a smaller version of what they're asking,delay answering",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "depends",
                  "delay"
                ],
                "raw": "delay answering,decide based on who is asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "offer a smaller version of what they're asking,delay answering",
            "Q12b": "delay answering,decide based on who is asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant C",
            "interests": [
              {
                "id": "p03-interest-1",
                "text": "呀米呀米的食物",
                "field": "Q16_1",
                "motif": "food-plate",
                "depthThickness": 0.25,
                "reasonStatus": "described",
                "reasons": [
                  "Enjoying the process",
                  "Discovering new things"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "吃东西",
                "detail": ""
              },
              {
                "id": "p03-interest-2",
                "text": "减少的赘肉",
                "field": "Q16_2",
                "motif": "loose-shirt",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "减肥而穿上美美的衣服",
                "detail": ""
              },
              {
                "id": "p03-interest-3",
                "text": "音乐",
                "field": "Q16_3",
                "motif": "headphones",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "呀米呀米的食物",
            "Q16_2": "减少的赘肉",
            "Q16_3": "音乐",
            "Q18": "吃东西",
            "Q19": "Enjoying the process,Discovering new things",
            "Q19_8_TEXT": "",
            "Q41": "减肥而穿上美美的衣服"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "",
            "Q17b_7_TEXT": ""
          },
          "status": "blank",
          "scope": "Researcher only; exclude from portrait",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant C",
            "before": "焦虑",
            "now": "行动",
            "channel": "activation",
            "beforeLevel": "low",
            "nowLevel": "high",
            "evidence": "‘行动’ explicitly names taking action. The field begins moving; ‘焦虑’ remains readable source text without an inferred intensity or activity score.",
            "scope": "Researcher only; exclude from portrait (Q37_10)"
          },
          "raw": {
            "Q21_1": "焦虑",
            "Q21_2": "行动"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant C",
            "answer": "回避",
            "category": "pushback",
            "evidence": "‘回避’ names moving away from what is approached. Near the common spiral's center, the orbit makes one outward push. This is a visual metaphor, not a measure of how often or why Participant C avoids anything.",
            "scope": "Researcher only; exclude from portrait (Q37_9)"
          },
          "raw": {
            "Q22": "回避"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q21",
        "q22"
      ],
      "invitations": [
        "q7"
      ]
    },
    {
      "id": "p04",
      "name": "Participant D",
      "answers": {
        "Q1_1": "100",
        "Q1_2": "20",
        "Q1_3": "70",
        "Q1_4": "6",
        "Q3_1": "24",
        "Q3_2": "78",
        "Q3_3": "65",
        "Q3_4": "26",
        "Q5_1": "10",
        "Q5_2": "10",
        "Q5_3": "50",
        "Q6_1": "13",
        "Q6_2": "14",
        "Q9a": "Listen before responding,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Give them space",
        "Q9b_7_TEXT": "",
        "Q12a": "decide based on who is asking",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't",
        "Q12b_7_TEXT": "",
        "Q16_1": "听音乐",
        "Q16_2": "",
        "Q16_3": "",
        "Q18": "game",
        "Q19": "Connecting with people",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "",
        "Q21_2": "",
        "Q22": "",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "",
        "Q24": "When overloaded — handle privately (0) to ask for help (100). My usual: ${q://QID7/ChoiceNumericEntryValue/1}; preferred: ${q://QID7/ChoiceNumericEntryValue/2}",
        "Q37_1": "Researcher only; exclude from portrait",
        "Q37_2": "",
        "Q37_3": "",
        "Q37_4": "",
        "Q37_5": "",
        "Q37_6": "",
        "Q37_7": "",
        "Q37_8": "",
        "Q37_9": "",
        "Q37_10": "",
        "Q38": "",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant D"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 100,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 20,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 70,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 6,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "100",
            "Q1_2": "20",
            "Q1_3": "70",
            "Q1_4": "6"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 24,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 78,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 65,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 26,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "24",
            "Q3_2": "78",
            "Q3_3": "65",
            "Q3_4": "26"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 10,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 10,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 50,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "10",
            "Q5_2": "10",
            "Q5_3": "50"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 13,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 14,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "13",
            "Q6_2": "14"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "space"
                ],
                "field": "Q9b",
                "raw": "Give them space",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,It depends on the situation",
            "Q9b": "Give them space",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "depends"
                ],
                "raw": "decide based on who is asking",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no"
                ],
                "raw": "explain that I can't",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "decide based on who is asking",
            "Q12b": "explain that I can't",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant D",
            "interests": [
              {
                "id": "p04-interest-1",
                "text": "听音乐",
                "field": "Q16_1",
                "motif": "headphones",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p04-interest-2",
                "text": "game",
                "field": "Q18",
                "motif": "gamepad",
                "depthThickness": 0.25,
                "reasonStatus": "described",
                "reasons": [
                  "Connecting with people"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "听音乐",
            "Q16_2": "",
            "Q16_3": "",
            "Q18": "game",
            "Q19": "Connecting with people",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "",
            "Q17b_7_TEXT": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q21_1": "",
            "Q21_2": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q22": ""
          },
          "status": "blank",
          "scope": "Researcher only (blank)",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [],
      "invitations": [
        "q3"
      ]
    },
    {
      "id": "p05",
      "name": "Participant E",
      "answers": {
        "Q1_1": "40",
        "Q1_2": "73",
        "Q1_3": "90",
        "Q1_4": "18",
        "Q3_1": "10",
        "Q3_2": "100",
        "Q3_3": "30",
        "Q3_4": "10",
        "Q5_1": "20",
        "Q5_2": "87",
        "Q5_3": "68",
        "Q6_1": "71",
        "Q6_2": "53",
        "Q9a": "Listen before responding,Offer advice",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Offer advice",
        "Q9b_7_TEXT": "",
        "Q12a": "say yes, but feel frustrated",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't",
        "Q12b_7_TEXT": "",
        "Q16_1": "Cooking",
        "Q16_2": "Painting",
        "Q16_3": "",
        "Q18": "I enjoy cooking large meals for my family",
        "Q19": "Enjoying the process,Having breathing space",
        "Q19_8_TEXT": "",
        "Q41": "I enjoy making my soups from scratch.",
        "Q17a_1": "confrontation after dinner",
        "Q17a_2": "doing my regular routine",
        "Q17a_3": "the conversations with my kids the preceded the event",
        "Q17b": "Someone’s expectations",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "I was able to run long distances",
        "Q21_2": "feel my age and get exhausted easily",
        "Q22": "I worry about becoming someone who complains about many things that do not matter.",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "When a group had no clear direction — wait/support (0) to step in (100). My usual: ${q://QID3/ChoiceNumericEntryValue/1}; preferred: ${q://QID3/ChoiceNumericEntryValue/2},When overloaded — handle privately (0) to ask for help (100). My usual: ${q://QID7/ChoiceNumericEntryValue/1}; preferred: ${q://QID7/ChoiceNumericEntryValue/2}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},When creating without one correct outcome — structure first (0) to follow possibilities (100). My usual: ${q://QID8/ChoiceNumericEntryValue/1}; preferred: ${q://QID8/ChoiceNumericEntryValue/2}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "May share and compare after my review",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "May share and compare after my review",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "May share and compare after my review",
        "Q37_9": "May share and compare after my review",
        "Q37_10": "May share and compare after my review",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant E"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 40,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 73,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 90,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 18,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "40",
            "Q1_2": "73",
            "Q1_3": "90",
            "Q1_4": "18"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 10,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 100,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 30,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 10,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "10",
            "Q3_2": "100",
            "Q3_3": "30",
            "Q3_4": "10"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 20,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 87,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 68,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "20",
            "Q5_2": "87",
            "Q5_3": "68"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 71,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 53,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "71",
            "Q6_2": "53"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "listen",
                  "advice"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Offer advice",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "advice"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Offer advice",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Offer advice",
            "Q9b": "Listen before responding,Offer advice",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "frustrated"
                ],
                "raw": "say yes, but feel frustrated",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no"
                ],
                "raw": "explain that I can't",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "say yes, but feel frustrated",
            "Q12b": "explain that I can't",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant E",
            "interests": [
              {
                "id": "p05-interest-1",
                "text": "Cooking",
                "field": "Q16_1",
                "category": "making",
                "categorySource": "design_hypothesis",
                "reasonStatus": "described",
                "reasons": [
                  "Enjoying the process",
                  "Having breathing space"
                ],
                "story": "I enjoy cooking large meals for my family",
                "detail": "I enjoy making my soups from scratch.",
                "reasonFields": [
                  "Q19",
                  "Q18",
                  "Q41"
                ],
                "motif": "spoon",
                "depthThickness": 0.64
              },
              {
                "id": "p05-interest-2",
                "text": "Painting",
                "field": "Q16_2",
                "category": "image_making",
                "categorySource": "design_hypothesis",
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": "",
                "reasonFields": [],
                "motif": "palette",
                "depthThickness": 0.035
              }
            ],
            "linkNote": "Follow-up reasons and story attach only to Cooking. Motifs approved by the researcher; no reasons inferred for the other interest."
          },
          "raw": {
            "Q16_1": "Cooking",
            "Q16_2": "Painting",
            "Q16_3": "",
            "Q18": "I enjoy cooking large meals for my family",
            "Q19": "Enjoying the process,Having breathing space",
            "Q19_8_TEXT": "",
            "Q41": "I enjoy making my soups from scratch."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant E",
            "context": "confrontation after dinner",
            "shown": "doing my regular routine",
            "unseen": "the conversations with my kids the preceded the event",
            "influences": "Someone’s expectations",
            "source": "Q17a_1–3 · Q17b"
          },
          "raw": {
            "Q17a_1": "confrontation after dinner",
            "Q17a_2": "doing my regular routine",
            "Q17a_3": "the conversations with my kids the preceded the event",
            "Q17b": "Someone’s expectations",
            "Q17b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant E",
            "before": "I was able to run long distances",
            "now": "feel my age and get exhausted easily",
            "channel": "reach",
            "beforeLevel": "high",
            "nowLevel": "low",
            "evidence": "Running long distances → becoming exhausted more easily; reach is a visual metaphor, not measured distance.",
            "review": "Clear textual basis",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q21_1": "I was able to run long distances",
            "Q21_2": "feel my age and get exhausted easily"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant E",
            "answer": "I worry about becoming someone who complains about many things that do not matter.",
            "category": "microTurbulence",
            "evidence": "‘Complains about many things that do not matter’ suggests repeated small catches in attention. Five fixed snags in the orbit are an interpretive metaphor, not a claim that this is already happening.",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q22": "I worry about becoming someone who complains about many things that do not matter."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q1",
        "q3"
      ],
      "invitations": [
        "q7",
        "q4"
      ]
    },
    {
      "id": "p06",
      "name": "Participant F",
      "answers": {
        "Q1_1": "50",
        "Q1_2": "40",
        "Q1_3": "60",
        "Q1_4": "60",
        "Q3_1": "39",
        "Q3_2": "60",
        "Q3_3": "61",
        "Q3_4": "64",
        "Q5_1": "18",
        "Q5_2": "37",
        "Q5_3": "50",
        "Q6_1": "70",
        "Q6_2": "50",
        "Q9a": "Listen before responding,Give them space",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Give them space",
        "Q9b_7_TEXT": "",
        "Q12a": "say yes, but feel frustrated",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't,offer a smaller version of what they're asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "listen to podcasts",
        "Q16_2": "",
        "Q16_3": "",
        "Q18": "keep a diary",
        "Q19": "Enjoying the process,Discovering new things",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — something about how I think others see me",
        "Q21_1": "",
        "Q21_2": "",
        "Q22": "",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "others think I’m more direct, but most of the time I actually hold back first.",
        "Q23": "When a friend was upset — my usual responses: ${q://QID11/ChoiceGroup/SelectedChoices},When exhausted and asked for a favor — my likely responses: ${q://QID17/ChoiceGroup/SelectedChoices}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},When a friend was upset — my usual responses: ${q://QID11/ChoiceGroup/SelectedChoices}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "My private portrait only",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "My private portrait only",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "My private portrait only",
        "Q37_9": "My private portrait only",
        "Q37_10": "My private portrait only",
        "Q38": "Not sure; ask me later",
        "Q39": "Not sure; ask me later",
        "Q40": "Participant F"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 50,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 40,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 60,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 60,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "50",
            "Q1_2": "40",
            "Q1_3": "60",
            "Q1_4": "60"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 39,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 60,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 61,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 64,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "39",
            "Q3_2": "60",
            "Q3_3": "61",
            "Q3_4": "64"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 18,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 37,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 50,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "18",
            "Q5_2": "37",
            "Q5_3": "50"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 70,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 50,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "70",
            "Q6_2": "50"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "listen",
                  "space"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Give them space",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "space"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Give them space",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Give them space",
            "Q9b": "Listen before responding,Give them space",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "frustrated"
                ],
                "raw": "say yes, but feel frustrated",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "smaller",
                  "no"
                ],
                "raw": "explain that I can't,offer a smaller version of what they're asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "say yes, but feel frustrated",
            "Q12b": "explain that I can't,offer a smaller version of what they're asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant F",
            "interests": [
              {
                "id": "p06-interest-1",
                "text": "listen to podcasts",
                "field": "Q16_1",
                "motif": "headphones",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p06-interest-2",
                "text": "keep a diary",
                "field": "Q18",
                "motif": "diary",
                "depthThickness": 0.25,
                "reasonStatus": "described",
                "reasons": [
                  "Enjoying the process",
                  "Discovering new things"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "listen to podcasts",
            "Q16_2": "",
            "Q16_3": "",
            "Q18": "keep a diary",
            "Q19": "Enjoying the process,Discovering new things",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "",
            "Q17b_7_TEXT": ""
          },
          "status": "blank",
          "scope": "My private portrait only",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q21_1": "",
            "Q21_2": ""
          },
          "status": "blank",
          "scope": "My private portrait only",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q22": ""
          },
          "status": "blank",
          "scope": "My private portrait only",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q5",
        "q6"
      ],
      "invitations": [
        "q7",
        "q5"
      ]
    },
    {
      "id": "p07",
      "name": "Participant G",
      "answers": {
        "Q1_1": "75",
        "Q1_2": "75",
        "Q1_3": "51",
        "Q1_4": "84",
        "Q3_1": "88",
        "Q3_2": "100",
        "Q3_3": "49",
        "Q3_4": "100",
        "Q5_1": "0",
        "Q5_2": "0",
        "Q5_3": "61",
        "Q6_1": "68",
        "Q6_2": "68",
        "Q9a": "Offer advice,Help with something practical",
        "Q9a_7_TEXT": "",
        "Q9b": "It depends on the situation",
        "Q9b_7_TEXT": "",
        "Q12a": "other",
        "Q12a_7_TEXT": "it's actually depend on who is asking. if it's some one i genuinently care then it goes without saying, otherwise i'm gonna prioritize myself",
        "Q12b": "other",
        "Q12b_7_TEXT": "Ask myself whether i'm comfortable with what i decided to decide",
        "Q16_1": "Listen to my favorite band ",
        "Q16_2": "watch guitar covers of my favorite band on youtube and dreamed about one day i'll be that good to play that and make myself burst into tears while playing",
        "Q16_3": "daydreaming with my roomate and feeling being everywhere and nowhere at the same time",
        "Q18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life.",
        "Q19": "Enjoying the process",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "Habit",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — another answer that matters to me",
        "Q21_1": "idk, just generally speaking, it's impossible to act completely how we wish to be cause the eyes are always everywhere. so i choose to give a lot more time to myself, being alone, so that i can do anything that i wanna do and when there's a crowd, just measure whether it's worth it to be brave. and if it's something that deep down you know that you should do, just be brave and step out, ignoring the eyes",
        "Q21_2": "",
        "Q22": "i think i kept answering what you ask in the wrong place",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "idk. i think, to some degree, i don't care how someone else understanding these answers and my thinking to it. It's just to tired to try to take control of everything. ",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "",
        "Q24": "",
        "Q37_1": "May share after my review; no comparisons",
        "Q37_2": "May share after my review; no comparisons",
        "Q37_3": "May share after my review; no comparisons",
        "Q37_4": "May share after my review; no comparisons",
        "Q37_5": "May share after my review; no comparisons",
        "Q37_6": "May share after my review; no comparisons",
        "Q37_7": "May share after my review; no comparisons",
        "Q37_8": "May share after my review; no comparisons",
        "Q37_9": "May share after my review; no comparisons",
        "Q37_10": "May share after my review; no comparisons",
        "Q38": "Not sure; ask me later",
        "Q39": "Not sure; ask me later",
        "Q40": "Participant G"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 75,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 75,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 51,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 84,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "75",
            "Q1_2": "75",
            "Q1_3": "51",
            "Q1_4": "84"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 88,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 100,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 49,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 100,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "88",
            "Q3_2": "100",
            "Q3_3": "49",
            "Q3_4": "100"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 0,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 0,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 61,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "0",
            "Q5_2": "0",
            "Q5_3": "61"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 68,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 68,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "68",
            "Q6_2": "68"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "practical",
                  "advice"
                ],
                "field": "Q9a",
                "raw": "Offer advice,Help with something practical",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "depends"
                ],
                "field": "Q9b",
                "raw": "It depends on the situation",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Offer advice,Help with something practical",
            "Q9b": "It depends on the situation",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "other"
                ],
                "raw": "other",
                "field": "Q12a",
                "other": "it's actually depend on who is asking. if it's some one i genuinently care then it goes without saying, otherwise i'm gonna prioritize myself"
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "other"
                ],
                "raw": "other",
                "field": "Q12b",
                "other": "Ask myself whether i'm comfortable with what i decided to decide"
              }
            ]
          },
          "raw": {
            "Q12a": "other",
            "Q12b": "other",
            "Q12a_7_TEXT": "it's actually depend on who is asking. if it's some one i genuinently care then it goes without saying, otherwise i'm gonna prioritize myself",
            "Q12b_7_TEXT": "Ask myself whether i'm comfortable with what i decided to decide"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant G",
            "interests": [
              {
                "id": "p07-interest-1",
                "text": "Listen to my favorite band ",
                "field": "Q16_1",
                "motif": "headphones",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Enjoying the process"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "Music is always there, it's been there for too long and helped me through so many things. ",
                "detail": "",
                "sourceQ18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life."
              },
              {
                "id": "p07-interest-2",
                "text": "watch guitar covers of my favorite band on youtube and dreamed about one day i'll be that good to play that and make myself burst into tears while playing",
                "field": "Q16_2",
                "motif": "guitar",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Enjoying the process"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": "Watching guitar covers / Imagining playing",
                "sourceQ18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life."
              },
              {
                "id": "p07-interest-3",
                "text": "daydreaming with my roomate and feeling being everywhere and nowhere at the same time",
                "field": "Q16_3",
                "motif": "shared-cloud",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Enjoying the process"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": "Daydreaming with my roommate",
                "sourceQ18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life."
              },
              {
                "id": "p07-interest-4",
                "text": "latte",
                "field": "Q18",
                "sourceExcerpt": "And latte, i need caffeine.",
                "motif": "coffee-cup",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Enjoying the process"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "And latte, i need caffeine.",
                "detail": "",
                "sourceQ18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life."
              },
              {
                "id": "p07-interest-5",
                "text": "TV series",
                "field": "Q18",
                "sourceExcerpt": "And TV series, it also builds up so many parts of my life.",
                "motif": "screen",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Enjoying the process"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "And TV series, it also builds up so many parts of my life.",
                "detail": "",
                "sourceQ18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life."
              }
            ]
          },
          "raw": {
            "Q16_1": "Listen to my favorite band ",
            "Q16_2": "watch guitar covers of my favorite band on youtube and dreamed about one day i'll be that good to play that and make myself burst into tears while playing",
            "Q16_3": "daydreaming with my roomate and feeling being everywhere and nowhere at the same time",
            "Q18": "Music is always there, it's been there for too long and helped me through so many things. \nAnd latte, i need caffeine.\nAnd TV series, it also builds up so many parts of my life.",
            "Q19": "Enjoying the process",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "Habit",
            "Q17b_7_TEXT": ""
          },
          "status": "skipped",
          "scope": "May share after my review; no comparisons",
          "note": "The event description was skipped. The selected Q17b factors remain in the source record, but no event visual is drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q21_1": "idk, just generally speaking, it's impossible to act completely how we wish to be cause the eyes are always everywhere. so i choose to give a lot more time to myself, being alone, so that i can do anything that i wanna do and when there's a crowd, just measure whether it's worth it to be brave. and if it's something that deep down you know that you should do, just be brave and step out, ignoring the eyes",
            "Q21_2": ""
          },
          "status": "incomplete",
          "scope": "May share after my review; no comparisons",
          "note": "Only Before was recorded. The Beginning-to endpoint is missing, so no transition is drawn; the full original text remains below."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q22": "i think i kept answering what you ask in the wrong place"
          },
          "status": "source-only",
          "scope": "May share after my review; no comparisons",
          "note": "This answer comments on the placement of survey responses. It does not name a feared way of living or responding, so its original text is kept without a visual."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [],
      "invitations": []
    },
    {
      "id": "p08",
      "name": "Participant H",
      "answers": {
        "Q1_1": "40",
        "Q1_2": "60",
        "Q1_3": "100",
        "Q1_4": "70",
        "Q3_1": "",
        "Q3_2": "92",
        "Q3_3": "50",
        "Q3_4": "84",
        "Q5_1": "30",
        "Q5_2": "61",
        "Q5_3": "100",
        "Q6_1": "50",
        "Q6_2": "50",
        "Q9a": "Listen before responding,Help with something practical",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,It depends on the situation",
        "Q9b_7_TEXT": "",
        "Q12a": "explain that I can't,decide based on who is asking",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't,decide based on who is asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "shopping online",
        "Q16_2": "dancing",
        "Q16_3": "",
        "Q18": "",
        "Q19": "Practicing a skill,Connecting with people",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "My own needs,Uncertainty",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "I won't turn down any requests from people",
        "Q21_2": "Consider my feelings beforehand.",
        "Q22": "procrastination.",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "When someone close bothered me — hold back (0) to name the problem (100). My usual: ${q://QID5/ChoiceNumericEntryValue/1}; preferred: ${q://QID5/ChoiceNumericEntryValue/2}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "May share and compare after my review",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "May share and compare after my review",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "May share and compare after my review",
        "Q37_9": "May share and compare after my review",
        "Q37_10": "May share and compare after my review",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant H"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 40,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 60,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 100,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 70,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "40",
            "Q1_2": "60",
            "Q1_3": "100",
            "Q1_4": "70"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": null,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 92,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 50,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 84,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "",
            "Q3_2": "92",
            "Q3_3": "50",
            "Q3_4": "84"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 30,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 61,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 100,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "30",
            "Q5_2": "61",
            "Q5_3": "100"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 50,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 50,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "50",
            "Q6_2": "50"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "practical",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Help with something practical",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "depends",
                  "listen"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,It depends on the situation",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Help with something practical",
            "Q9b": "Listen before responding,It depends on the situation",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "depends",
                  "no"
                ],
                "raw": "explain that I can't,decide based on who is asking",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "depends",
                  "no"
                ],
                "raw": "explain that I can't,decide based on who is asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "explain that I can't,decide based on who is asking",
            "Q12b": "explain that I can't,decide based on who is asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant H",
            "interests": [
              {
                "id": "p08-interest-1",
                "text": "shopping online",
                "field": "Q16_1",
                "motif": "shopping-bag",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Practicing a skill",
                  "Connecting with people"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": "",
                "sourceQ18": ""
              },
              {
                "id": "p08-interest-2",
                "text": "dancing",
                "field": "Q16_2",
                "motif": "dancer",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Practicing a skill",
                  "Connecting with people"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": "",
                "sourceQ18": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "shopping online",
            "Q16_2": "dancing",
            "Q16_3": "",
            "Q18": "",
            "Q19": "Practicing a skill,Connecting with people",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "My own needs,Uncertainty",
            "Q17b_7_TEXT": ""
          },
          "status": "skipped",
          "scope": "May share and compare after my review",
          "note": "The event description was skipped. The selected Q17b factors remain in the source record, but no event visual is drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant H",
            "before": "I won't turn down any requests from people",
            "now": "Consider my feelings beforehand.",
            "channel": "permeability",
            "beforeLevel": "high",
            "nowLevel": "low",
            "evidence": "Accepting requests without refusing → checking one's own feelings first. A less permeable boundary does not mean rejecting everyone.",
            "review": "Clear textual basis",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q21_1": "I won't turn down any requests from people",
            "Q21_2": "Consider my feelings beforehand."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant H",
            "answer": "procrastination.",
            "category": "stall",
            "evidence": "The word names delay. A single broad hold in the orbit visualizes hesitation; it does not infer why Participant H procrastinates or how often.",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q22": "procrastination."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q2"
      ],
      "invitations": [
        "q7"
      ]
    },
    {
      "id": "p09",
      "name": "Participant I",
      "answers": {
        "Q1_1": "30",
        "Q1_2": "14",
        "Q1_3": "75",
        "Q1_4": "50",
        "Q3_1": "20",
        "Q3_2": "20",
        "Q3_3": "74",
        "Q3_4": "4",
        "Q5_1": "5",
        "Q5_2": "8",
        "Q5_3": "11",
        "Q6_1": "82",
        "Q6_2": "25",
        "Q9a": "Listen before responding,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding",
        "Q9b_7_TEXT": "",
        "Q12a": "say yes, but feel frustrated",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't",
        "Q12b_7_TEXT": "",
        "Q16_1": "shopping",
        "Q16_2": "play guitar",
        "Q16_3": "",
        "Q18": "music",
        "Q19": "Discovering new things,Connecting with people",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "Someone’s expectations,The role I was in",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — something about how I think others see me",
        "Q21_1": "I enjoy messy and casual environment",
        "Q21_2": "Work in a specific place which is neat and absolutely quiet",
        "Q22": "I'm really afraid of showing off myself too much so that I become a topic for people to talk about during their lunch, but I still don't really want to be ignored.",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "I'm kind of afraid of taking responsibilities for a group of people, but I'm shortening my suggestion into something pretty short, clear but with strong opinion so that people feel I'm kind of taking control of whole things go.",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "Others see me as a person not worth mentioning in gossip but kind of ignorable.",
        "Q23": "When a friend was upset — my usual responses: ${q://QID11/ChoiceGroup/SelectedChoices},The pattern I worried about becoming stuck in — ${q://QID31/ChoiceTextEntryValue}",
        "Q24": "When a group had no clear direction — wait/support (0) to step in (100). My usual: ${q://QID3/ChoiceNumericEntryValue/1}; preferred: ${q://QID3/ChoiceNumericEntryValue/2},When a friend was upset — my usual responses: ${q://QID11/ChoiceGroup/SelectedChoices}",
        "Q37_1": "May share after my review; no comparisons",
        "Q37_2": "",
        "Q37_3": "",
        "Q37_4": "",
        "Q37_5": "",
        "Q37_6": "May share after my review; no comparisons",
        "Q37_7": "",
        "Q37_8": "",
        "Q37_9": "May share after my review; no comparisons",
        "Q37_10": "May share after my review; no comparisons",
        "Q38": "Not sure; ask me later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant I"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 30,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 14,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 75,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 50,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "30",
            "Q1_2": "14",
            "Q1_3": "75",
            "Q1_4": "50"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 20,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 20,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 74,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 4,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "20",
            "Q3_2": "20",
            "Q3_3": "74",
            "Q3_4": "4"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 5,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 8,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 11,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "5",
            "Q5_2": "8",
            "Q5_3": "11"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 82,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 25,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "82",
            "Q6_2": "25"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen"
                ],
                "field": "Q9b",
                "raw": "Listen before responding",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,It depends on the situation",
            "Q9b": "Listen before responding",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "frustrated"
                ],
                "raw": "say yes, but feel frustrated",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no"
                ],
                "raw": "explain that I can't",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "say yes, but feel frustrated",
            "Q12b": "explain that I can't",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant I",
            "interests": [
              {
                "id": "p09-interest-1",
                "text": "shopping",
                "field": "Q16_1",
                "motif": "shopping-bag",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "id": "p09-interest-2",
                "text": "play guitar",
                "field": "Q16_2",
                "motif": "guitar",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "contextReasons": [
                  "Discovering new things",
                  "Connecting with people"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "sourceQ18": "music",
                "story": "",
                "detail": "Playing guitar"
              },
              {
                "id": "p09-interest-3",
                "text": "music",
                "field": "Q18",
                "motif": "headphones",
                "depthThickness": 0.25,
                "reasonStatus": "described",
                "reasons": [
                  "Discovering new things",
                  "Connecting with people"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "story": "",
                "detail": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "shopping",
            "Q16_2": "play guitar",
            "Q16_3": "",
            "Q18": "music",
            "Q19": "Discovering new things,Connecting with people",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "Someone’s expectations,The role I was in",
            "Q17b_7_TEXT": ""
          },
          "status": "skipped",
          "scope": "Researcher only (blank)",
          "note": "The event description was skipped. The selected Q17b factors remain in the source record, but no event visual is drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant I",
            "before": "I enjoy messy and casual environment",
            "now": "Work in a specific place which is neat and absolutely quiet",
            "channel": "alignment",
            "beforeLevel": "low",
            "nowLevel": "high",
            "evidence": "Messy/casual → neat workspace. The visual describes the stated environment, not a personality trait; quiet remains in the source text.",
            "review": "One aspect of two stated changes",
            "scope": "May share after my review; no comparisons"
          },
          "raw": {
            "Q21_1": "I enjoy messy and casual environment",
            "Q21_2": "Work in a specific place which is neat and absolutely quiet"
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant I",
            "answer": "I'm really afraid of showing off myself too much so that I become a topic for people to talk about during their lunch, but I still don't really want to be ignored.",
            "category": "visibilityTension",
            "evidence": "The answer names two opposed visibility concerns. A narrower clear arc is a provisional reading of the space between them; neither fear is treated as a current trait.",
            "scope": "May share after my review; no comparisons"
          },
          "raw": {
            "Q22": "I'm really afraid of showing off myself too much so that I become a topic for people to talk about during their lunch, but I still don't really want to be ignored."
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q5",
        "q22"
      ],
      "invitations": [
        "q1",
        "q5"
      ]
    },
    {
      "id": "p10",
      "name": "Participant J",
      "answers": {
        "Q1_1": "70",
        "Q1_2": "70",
        "Q1_3": "50",
        "Q1_4": "60",
        "Q3_1": "25",
        "Q3_2": "30",
        "Q3_3": "30",
        "Q3_4": "29",
        "Q5_1": "50",
        "Q5_2": "50",
        "Q5_3": "60",
        "Q6_1": "70",
        "Q6_2": "70",
        "Q9a": "Listen before responding,Help with something practical",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Help with something practical",
        "Q9b_7_TEXT": "",
        "Q12a": "offer a smaller version of what they're asking,decide based on who is asking",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't,delay answering",
        "Q12b_7_TEXT": "",
        "Q16_1": "Tennis",
        "Q16_2": "Dormitory",
        "Q16_3": "",
        "Q18": "I like playing tennis and photography.",
        "Q19": "Enjoying the process,Practicing a skill",
        "Q19_8_TEXT": "",
        "Q41": "Everytime i play tennis, i can feel my progress.",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "chilling",
        "Q21_2": "Exploring, self-discipline",
        "Q22": "",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "",
        "Q24": "",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "May share and compare after my review",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "May share and compare after my review",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "May share and compare after my review",
        "Q37_9": "May share and compare after my review",
        "Q37_10": "May share and compare after my review",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant J"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 70,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 70,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 50,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 60,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "70",
            "Q1_2": "70",
            "Q1_3": "50",
            "Q1_4": "60"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 25,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 30,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 30,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 29,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "25",
            "Q3_2": "30",
            "Q3_3": "30",
            "Q3_4": "29"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 50,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 50,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 60,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "50",
            "Q5_2": "50",
            "Q5_3": "60"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 70,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 70,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "70",
            "Q6_2": "70"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "practical",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Help with something practical",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "practical",
                  "listen"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Help with something practical",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Help with something practical",
            "Q9b": "Listen before responding,Help with something practical",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "smaller",
                  "depends"
                ],
                "raw": "offer a smaller version of what they're asking,decide based on who is asking",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no",
                  "delay"
                ],
                "raw": "explain that I can't,delay answering",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "offer a smaller version of what they're asking,decide based on who is asking",
            "Q12b": "explain that I can't,delay answering",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant J",
            "interests": [
              {
                "depthThickness": 0.25,
                "reasonStatus": "researcher_coded",
                "reasons": [
                  "Enjoying the process",
                  "Practicing a skill"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "reasonCoding": {
                  "basis": "Project author approved applying both Q19 reasons to both activities named together in Q18; not a participant-confirmed activity-specific assignment."
                },
                "sourceQ18": "I like playing tennis and photography.",
                "sourceQ19": "Enjoying the process,Practicing a skill",
                "unassignedReasons": [],
                "detail": "Shared Q18/Q19 attribution approved by project author; participant review pending.",
                "id": "p10-interest-1",
                "text": "Tennis",
                "field": "Q16_1",
                "motif": "tennis",
                "story": "Everytime i play tennis, i can feel my progress."
              },
              {
                "id": "p10-interest-2",
                "text": "Dormitory",
                "field": "Q16_2",
                "motif": "dormitory",
                "depthThickness": 0.25,
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": ""
              },
              {
                "depthThickness": 0.25,
                "reasonStatus": "researcher_coded",
                "reasons": [
                  "Enjoying the process",
                  "Practicing a skill"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "reasonCoding": {
                  "basis": "Project author approved applying both Q19 reasons to both activities named together in Q18; not a participant-confirmed activity-specific assignment."
                },
                "sourceQ18": "I like playing tennis and photography.",
                "sourceQ19": "Enjoying the process,Practicing a skill",
                "unassignedReasons": [],
                "detail": "Shared Q18/Q19 attribution approved by project author; participant review pending.",
                "id": "p10-interest-3",
                "text": "Photography",
                "field": "Q18",
                "motif": "camera",
                "story": ""
              }
            ]
          },
          "raw": {
            "Q16_1": "Tennis",
            "Q16_2": "Dormitory",
            "Q16_3": "",
            "Q18": "I like playing tennis and photography.",
            "Q19": "Enjoying the process,Practicing a skill",
            "Q19_8_TEXT": "",
            "Q41": "Everytime i play tennis, i can feel my progress."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "",
            "Q17b_7_TEXT": ""
          },
          "status": "blank",
          "scope": "May share and compare after my review",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant J",
            "before": "chilling",
            "now": "Exploring, self-discipline",
            "channel": "engagement",
            "beforeLevel": "low",
            "nowLevel": "high",
            "evidence": "Chilling → exploring supports an activity change. Self-discipline is not encoded by this single parameter and remains visible in the source.",
            "review": "Partial reading; choose a primary axis before final use",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q21_1": "chilling",
            "Q21_2": "Exploring, self-discipline"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q22": ""
          },
          "status": "blank",
          "scope": "May share and compare after my review",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [],
      "invitations": []
    },
    {
      "id": "p11",
      "name": "Participant K",
      "answers": {
        "Q1_1": "100",
        "Q1_2": "100",
        "Q1_3": "70",
        "Q1_4": "80",
        "Q3_1": "40",
        "Q3_2": "100",
        "Q3_3": "0",
        "Q3_4": "80",
        "Q5_1": "100",
        "Q5_2": "100",
        "Q5_3": "100",
        "Q6_1": "50",
        "Q6_2": "",
        "Q9a": "Ask what they need,It depends on the situation",
        "Q9a_7_TEXT": "",
        "Q9b": "Help with something practical,Give them space",
        "Q9b_7_TEXT": "",
        "Q12a": "explain that I can't,delay answering",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't,offer a smaller version of what they're asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "Watch anime",
        "Q16_2": "Eat things I like",
        "Q16_3": "",
        "Q18": "Go to new restaurants and eat alone.",
        "Q19": "Having breathing space,I simply enjoy it",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "Suffering too much",
        "Q17a_2": "Emotions",
        "Q17a_3": "The reason behind it",
        "Q17b": "The role I was in,Uncertainty",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "",
        "Q21_2": "",
        "Q22": "Push myself too hard to fit in other‘s expectations.",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790054117157_0\",\"title\":\"\",\"domain\":\"\",\"context\":\"\",\"selves\":{},\"permission\":\"researcher_only\",\"invitation\":\"no\"}]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "When exhausted and asked for a favor — my likely responses: ${q://QID17/ChoiceGroup/SelectedChoices}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "Researcher only; exclude from portrait",
        "Q37_3": "Researcher only; exclude from portrait",
        "Q37_4": "Researcher only; exclude from portrait",
        "Q37_5": "Researcher only; exclude from portrait",
        "Q37_6": "Researcher only; exclude from portrait",
        "Q37_7": "Researcher only; exclude from portrait",
        "Q37_8": "My private portrait only",
        "Q37_9": "May share after my review; no comparisons",
        "Q37_10": "My private portrait only",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Not sure; ask me later",
        "Q40": "Participant K"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 100,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 100,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 70,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 80,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "100",
            "Q1_2": "100",
            "Q1_3": "70",
            "Q1_4": "80"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 40,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 100,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 0,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 80,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "40",
            "Q3_2": "100",
            "Q3_3": "0",
            "Q3_4": "80"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 100,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 100,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 100,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "100",
            "Q5_2": "100",
            "Q5_3": "100"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 50,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": null,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "50",
            "Q6_2": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "depends",
                  "ask"
                ],
                "field": "Q9a",
                "raw": "Ask what they need,It depends on the situation",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "practical",
                  "space"
                ],
                "field": "Q9b",
                "raw": "Help with something practical,Give them space",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Ask what they need,It depends on the situation",
            "Q9b": "Help with something practical,Give them space",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "no",
                  "delay"
                ],
                "raw": "explain that I can't,delay answering",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "smaller",
                  "no"
                ],
                "raw": "explain that I can't,offer a smaller version of what they're asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "explain that I can't,delay answering",
            "Q12b": "explain that I can't,offer a smaller version of what they're asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant K",
            "interests": [
              {
                "id": "p11-interest-1",
                "text": "Watch anime",
                "field": "Q16_1",
                "motif": "anime-frames",
                "depthThickness": 0.25,
                "reasonStatus": "pending_assignment",
                "reasons": [],
                "unassignedReasons": [
                  "Having breathing space",
                  "I simply enjoy it"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "sourceQ18": "Go to new restaurants and eat alone.",
                "sourceQ19": "Having breathing space,I simply enjoy it",
                "story": "",
                "detail": "Q18 specifically describes eating alone. Q19 does not assign a reason to anime."
              },
              {
                "id": "p11-interest-2",
                "text": "Eat things I like · Go to new restaurants and eat alone",
                "field": "Q16_2",
                "motif": "food-plate",
                "depthThickness": 0.25,
                "reasonStatus": "selected_in_Q18",
                "reasons": [
                  "Having breathing space",
                  "I simply enjoy it"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "sourceQ18": "Go to new restaurants and eat alone.",
                "sourceQ19": "Having breathing space,I simply enjoy it",
                "story": "Go to new restaurants and eat alone.",
                "detail": "Q18 selects a specific eating activity after Q16_2; the association is awaiting project-author visual review."
              }
            ]
          },
          "raw": {
            "Q16_1": "Watch anime",
            "Q16_2": "Eat things I like",
            "Q16_3": "",
            "Q18": "Go to new restaurants and eat alone.",
            "Q19": "Having breathing space,I simply enjoy it",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant K",
            "context": "Suffering too much",
            "contextGeometry": "unlocated",
            "shown": "Emotions",
            "unseen": "The reason behind it",
            "influences": "The role I was in,Uncertainty",
            "source": "Q17a_1–3 · Q17b"
          },
          "raw": {
            "Q17a_1": "Suffering too much",
            "Q17a_2": "Emotions",
            "Q17a_3": "The reason behind it",
            "Q17b": "The role I was in,Uncertainty",
            "Q17b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q21_1": "",
            "Q21_2": ""
          },
          "status": "blank",
          "scope": "My private portrait only",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant R_3fqJA1UY5sH9IAh",
            "answer": "Push myself too hard to fit in other‘s expectations.",
            "category": "externalPull",
            "evidence": "‘Fit in other‘s expectations’ explicitly names an outside influence. The orbit is drawn toward one fixed external point; the answer is not scored for intensity.",
            "scope": "May share after my review; no comparisons"
          },
          "raw": {
            "Q22": "Push myself too hard to fit in other‘s expectations."
          },
          "status": "mapped",
          "scope": "May share after my review; no comparisons",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790054117157_0\",\"title\":\"\",\"domain\":\"\",\"context\":\"\",\"selves\":{},\"permission\":\"researcher_only\",\"invitation\":\"no\"}]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q6"
      ],
      "invitations": [
        "q7"
      ]
    },
    {
      "id": "p12",
      "name": "Participant L",
      "answers": {
        "Q1_1": "90",
        "Q1_2": "90",
        "Q1_3": "85",
        "Q1_4": "80",
        "Q3_1": "80",
        "Q3_2": "100",
        "Q3_3": "18",
        "Q3_4": "60",
        "Q5_1": "28",
        "Q5_2": "77",
        "Q5_3": "100",
        "Q6_1": "27",
        "Q6_2": "86",
        "Q9a": "Listen before responding,Ask what they need",
        "Q9a_7_TEXT": "",
        "Q9b": "Offer advice,Help with something practical",
        "Q9b_7_TEXT": "",
        "Q12a": "say yes, but feel frustrated,delay answering",
        "Q12a_7_TEXT": "",
        "Q12b": "explain that I can't",
        "Q12b_7_TEXT": "",
        "Q16_1": "listening to music",
        "Q16_2": "reading",
        "Q16_3": "",
        "Q18": "Listening to music to keep all concerns and thoughts far.",
        "Q19": "Enjoying the process,Having breathing space",
        "Q19_8_TEXT": "",
        "Q41": "Listening to music makes me resonate with the producer/ singer and makes me immersed in the exact vibe songs give me so I can escape my real life.",
        "Q17a_1": "When I ran into someone I know ",
        "Q17a_2": "I didn’t greet her",
        "Q17a_3": "Cause I’m shortsighted and I didn’t wear glasses so it took me so long to recognize her until she already walked past me",
        "Q17b": "Habit,Uncertainty",
        "Q17b_7_TEXT": "",
        "Q20": "No, continue without more questions",
        "Q21_1": "I’m really uncomfortable when I’m alone feeling very pathetic and lonely",
        "Q21_2": "Enjoy my personal space",
        "Q22": "Trapped with my work and finally turning my life into a survival game instead of enjoying it. ",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790054413657_0\",\"title\":\"It’s all me \",\"domain\":\"My relationship with myself\",\"context\":\"When some changes happened to my family earlier this year, and I feel like all my previous beliefs on who could support me and help me with my future or my whole life have totally collapsed. \",\"selves\":{\"actual\":\"I actually have started thinking about this topic for a long time since I was in high school, reading a lot of books and literature. But that incident led me to the final realization that there’s no one or nothing in your life that you could count on or depend on it, and that people are born alone and would also die alone. It’s all you who should take on responsibilities for yourself and it’s only you could or would do that. \"},\"permission\":\"compare_after_review\",\"invitation\":\"yes\"}]}",
        "FU1": "",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},The pattern I worried about becoming stuck in — ${q://QID31/ChoiceTextEntryValue}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},My recent change — before: ${q://QID30/ChoiceTextEntryValue/1}; beginning to: ${q://QID30/ChoiceTextEntryValue/2}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "May share and compare after my review",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "May share and compare after my review",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "May share and compare after my review",
        "Q37_9": "May share and compare after my review",
        "Q37_10": "May share and compare after my review",
        "Q38": "Not sure; ask me later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant L"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 90,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 90,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 85,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 80,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "90",
            "Q1_2": "90",
            "Q1_3": "85",
            "Q1_4": "80"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 80,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 100,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 18,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 60,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "80",
            "Q3_2": "100",
            "Q3_3": "18",
            "Q3_4": "60"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 28,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 77,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 100,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "28",
            "Q5_2": "77",
            "Q5_3": "100"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 27,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 86,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "27",
            "Q6_2": "86"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "listen",
                  "ask"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Ask what they need",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "practical",
                  "advice"
                ],
                "field": "Q9b",
                "raw": "Offer advice,Help with something practical",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Ask what they need",
            "Q9b": "Offer advice,Help with something practical",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "frustrated",
                  "delay"
                ],
                "raw": "say yes, but feel frustrated,delay answering",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no"
                ],
                "raw": "explain that I can't",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "say yes, but feel frustrated,delay answering",
            "Q12b": "explain that I can't",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant L",
            "interests": [
              {
                "id": "p12-interest-1",
                "text": "listening to music",
                "field": "Q16_1",
                "motif": "headphones",
                "depthThickness": 0.25,
                "categorySource": "unassigned",
                "reasonStatus": "described",
                "reasons": [
                  "Enjoying the process",
                  "Having breathing space"
                ],
                "story": "Listening to music to keep all concerns and thoughts far.",
                "detail": "Listening to music makes me resonate with the producer/ singer and makes me immersed in the exact vibe songs give me so I can escape my real life.",
                "reasonFields": [
                  "Q18",
                  "Q19",
                  "Q41"
                ]
              },
              {
                "id": "p12-interest-2",
                "text": "reading",
                "field": "Q16_2",
                "motif": "book",
                "depthThickness": 0.25,
                "categorySource": "unassigned",
                "reasonStatus": "not_described",
                "reasons": [],
                "story": "",
                "detail": "",
                "reasonFields": []
              }
            ],
            "linkNote": "Follow-up reasons and story attach only to listening to music. Motifs approved by the researcher; no reasons inferred for the other interest."
          },
          "raw": {
            "Q16_1": "listening to music",
            "Q16_2": "reading",
            "Q16_3": "",
            "Q18": "Listening to music to keep all concerns and thoughts far.",
            "Q19": "Enjoying the process,Having breathing space",
            "Q19_8_TEXT": "",
            "Q41": "Listening to music makes me resonate with the producer/ singer and makes me immersed in the exact vibe songs give me so I can escape my real life."
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant L",
            "context": "When I ran into someone I know",
            "shown": "I didn’t greet her",
            "unseen": "Cause I’m shortsighted and I didn’t wear glasses so it took me so long to recognize her until she already walked past me",
            "influences": "Habit,Uncertainty",
            "source": "Q17a_1–3 · Q17b"
          },
          "raw": {
            "Q17a_1": "When I ran into someone I know ",
            "Q17a_2": "I didn’t greet her",
            "Q17a_3": "Cause I’m shortsighted and I didn’t wear glasses so it took me so long to recognize her until she already walked past me",
            "Q17b": "Habit,Uncertainty",
            "Q17b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant L",
            "before": "I’m really uncomfortable when I’m alone feeling very pathetic and lonely",
            "now": "Enjoy my personal space",
            "channel": "irregularity",
            "beforeLevel": "high",
            "nowLevel": "low",
            "evidence": "The situation is still being alone; the reported experience changes. Motion irregularity is a proposed metaphor to review, not a psychological measure.",
            "review": "Interpretive; needs participant or researcher review",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q21_1": "I’m really uncomfortable when I’m alone feeling very pathetic and lonely",
            "Q21_2": "Enjoy my personal space"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant L",
            "answer": "Trapped with my work and finally turning my life into a survival game instead of enjoying it.",
            "category": "constriction",
            "evidence": "‘Trapped with my work’ and ‘survival game instead of enjoying it’ support a contraction of room to move. This is a metaphor, not a measure of workload.",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q22": "Trapped with my work and finally turning my life into a survival game instead of enjoying it. "
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": {
            "participant": "Participant L",
            "title": "It’s all me",
            "domain": "My relationship with myself",
            "context": "When some changes happened to my family earlier this year, and I feel like all my previous beliefs on who could support me and help me with my future or my whole life have totally collapsed.",
            "selves": {
              "actual": "I actually have started thinking about this topic for a long time since I was in high school, reading a lot of books and literature. But that incident led me to the final realization that there’s no one or nothing in your life that you could count on or depend on it, and that people are born alone and would also die alone. It’s all you who should take on responsibilities for yourself and it’s only you could or would do that."
            },
            "permission": "compare_after_review",
            "invitation": "yes",
            "relationDirection": 1,
            "relationEvidence": "The participant describes a change in trust in external support and a realization of personal responsibility. Inward travel is one provisional reading of that shift, not a score or a claim that external relationships are absent."
          },
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[{\"id\":\"story_1790054413657_0\",\"title\":\"It’s all me \",\"domain\":\"My relationship with myself\",\"context\":\"When some changes happened to my family earlier this year, and I feel like all my previous beliefs on who could support me and help me with my future or my whole life have totally collapsed. \",\"selves\":{\"actual\":\"I actually have started thinking about this topic for a long time since I was in high school, reading a lot of books and literature. But that incident led me to the final realization that there’s no one or nothing in your life that you could count on or depend on it, and that people are born alone and would also die alone. It’s all you who should take on responsibilities for yourself and it’s only you could or would do that. \"},\"permission\":\"compare_after_review\",\"invitation\":\"yes\"}]}"
          },
          "status": "mapped",
          "scope": "compare_after_review",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q7",
        "q22"
      ],
      "invitations": [
        "q7",
        "q21"
      ]
    },
    {
      "id": "p13",
      "name": "Participant M",
      "answers": {
        "Q1_1": "62",
        "Q1_2": "58",
        "Q1_3": "87",
        "Q1_4": "28",
        "Q3_1": "41",
        "Q3_2": "80",
        "Q3_3": "28",
        "Q3_4": "70",
        "Q5_1": "78",
        "Q5_2": "35",
        "Q5_3": "64",
        "Q6_1": "42",
        "Q6_2": "68",
        "Q9a": "Listen before responding,Help with something practical",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Give them space",
        "Q9b_7_TEXT": "",
        "Q12a": "other",
        "Q12a_7_TEXT": "depend  on the emergency level",
        "Q12b": "explain that I can't,delay answering",
        "Q12b_7_TEXT": "",
        "Q16_1": "cooking",
        "Q16_2": "",
        "Q16_3": "",
        "Q18": "cooking",
        "Q19": "Enjoying the process,Practicing a skill",
        "Q19_8_TEXT": "",
        "Q41": "i feel that that is the moment I don't need to talk with anyone and don't need to care anyone's feelings, being truly myself",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "",
        "Q17b_7_TEXT": "",
        "Q20": "Yes — something about expectations or what I feel I should do",
        "Q21_1": "love doing things with friends",
        "Q21_2": "doing most things on my own",
        "Q22": "i worry that i might be living in others' expectations forever",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "I usually prefer to address problems directly, but I sometimes hold back because I don’t want to create conflict or hurt the other person’s feelings.",
        "FU2": "friends / peers,a role I usually take on",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},When someone close bothered me — hold back (0) to name the problem (100). My usual: ${q://QID5/ChoiceNumericEntryValue/1}; preferred: ${q://QID5/ChoiceNumericEntryValue/2}",
        "Q24": "When a group had no clear direction — wait/support (0) to step in (100). My usual: ${q://QID3/ChoiceNumericEntryValue/1}; preferred: ${q://QID3/ChoiceNumericEntryValue/2},When someone close bothered me — hold back (0) to name the problem (100). My usual: ${q://QID5/ChoiceNumericEntryValue/1}; preferred: ${q://QID5/ChoiceNumericEntryValue/2}",
        "Q37_1": "Researcher only; exclude from portrait",
        "Q37_2": "My private portrait only",
        "Q37_3": "My private portrait only",
        "Q37_4": "My private portrait only",
        "Q37_5": "My private portrait only",
        "Q37_6": "My private portrait only",
        "Q37_7": "My private portrait only",
        "Q37_8": "My private portrait only",
        "Q37_9": "My private portrait only",
        "Q37_10": "My private portrait only",
        "Q38": "Not sure; ask me later",
        "Q39": "Not sure; ask me later",
        "Q40": "Participant M"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 62,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 58,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 87,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 28,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "62",
            "Q1_2": "58",
            "Q1_3": "87",
            "Q1_4": "28"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 41,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 80,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 28,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 70,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "41",
            "Q3_2": "80",
            "Q3_3": "28",
            "Q3_4": "70"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 78,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 35,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 64,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "78",
            "Q5_2": "35",
            "Q5_3": "64"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 42,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 68,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "42",
            "Q6_2": "68"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "practical",
                  "listen"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Help with something practical",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "space"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Give them space",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Help with something practical",
            "Q9b": "Listen before responding,Give them space",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "other"
                ],
                "raw": "other",
                "field": "Q12a",
                "other": "depend  on the emergency level"
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "no",
                  "delay"
                ],
                "raw": "explain that I can't,delay answering",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "other",
            "Q12b": "explain that I can't,delay answering",
            "Q12a_7_TEXT": "depend  on the emergency level",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant M",
            "interests": [
              {
                "id": "p13-interest-1",
                "text": "cooking",
                "field": "Q16_1",
                "motif": "spoon",
                "depthThickness": 0.64,
                "reasonStatus": "selected_in_Q18",
                "mappingReview": "approved_by_project_author",
                "reasons": [
                  "Enjoying the process",
                  "Practicing a skill"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "sourceQ18": "cooking",
                "sourceQ19": "Enjoying the process,Practicing a skill",
                "story": "i feel that that is the moment I don't need to talk with anyone and don't need to care anyone's feelings, being truly myself",
                "detail": "Q41 is displayed as a personal account; no additional emotion or solitude parameter is inferred."
              }
            ]
          },
          "raw": {
            "Q16_1": "cooking",
            "Q16_2": "",
            "Q16_3": "",
            "Q18": "cooking",
            "Q19": "Enjoying the process,Practicing a skill",
            "Q19_8_TEXT": "",
            "Q41": "i feel that that is the moment I don't need to talk with anyone and don't need to care anyone's feelings, being truly myself"
          },
          "status": "mapped",
          "scope": "Researcher only; exclude from portrait",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "",
            "Q17b_7_TEXT": ""
          },
          "status": "blank",
          "scope": "My private portrait only",
          "note": "Original shown/unseen trace and veil grammar. Only explicitly reviewed records are drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant M",
            "before": "love doing things with friends",
            "now": "doing most things on my own",
            "channel": "spacing",
            "beforeLevel": "low",
            "nowLevel": "high",
            "evidence": "Together with friends → more activities alone. Distance does not signify relationship quality.",
            "review": "Clear textual basis",
            "scope": "My private portrait only"
          },
          "raw": {
            "Q21_1": "love doing things with friends",
            "Q21_2": "doing most things on my own"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant M",
            "answer": "i worry that i might be living in others' expectations forever",
            "category": "externalPull",
            "evidence": "‘Others' expectations’ names the same kind of outside pull. The visual rule is shared with the other response in that category; no strength or personal variant is inferred.",
            "scope": "My private portrait only — do not share or compare"
          },
          "raw": {
            "Q22": "i worry that i might be living in others' expectations forever"
          },
          "status": "mapped",
          "scope": "My private portrait only",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q7",
        "q2"
      ],
      "invitations": [
        "q1",
        "q2"
      ]
    },
    {
      "id": "p14",
      "name": "Participant N",
      "answers": {
        "Q1_1": "61",
        "Q1_2": "85",
        "Q1_3": "32",
        "Q1_4": "30",
        "Q3_1": "50",
        "Q3_2": "73",
        "Q3_3": "68",
        "Q3_4": "42",
        "Q5_1": "61",
        "Q5_2": "62",
        "Q5_3": "81",
        "Q6_1": "19",
        "Q6_2": "20",
        "Q9a": "Listen before responding,Ask what they need",
        "Q9a_7_TEXT": "",
        "Q9b": "Listen before responding,Offer advice",
        "Q9b_7_TEXT": "",
        "Q12a": "say yes, but feel frustrated,explain that I can't",
        "Q12a_7_TEXT": "",
        "Q12b": "delay answering,decide based on who is asking",
        "Q12b_7_TEXT": "",
        "Q16_1": "Listening to Albums",
        "Q16_2": "Guitar",
        "Q16_3": "Video games",
        "Q18": "Listening to Albums",
        "Q19": "Enjoying the process,Having breathing space",
        "Q19_8_TEXT": "",
        "Q41": "",
        "Q17a_1": "",
        "Q17a_2": "",
        "Q17a_3": "",
        "Q17b": "Uncertainty,Something else",
        "Q17b_7_TEXT": "Alcohol",
        "Q20": "Yes — something about what I do and what I would prefer",
        "Q21_1": "Workaholic",
        "Q21_2": "relax and think about life",
        "Q22": "Working on repetitive things all the time",
        "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}",
        "FU1": "I do what I prefer to do bc I can make myself more creative",
        "FU2": "",
        "FU2_9_TEXT": "",
        "FU3": "",
        "Q23": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},My recent change — before: ${q://QID30/ChoiceTextEntryValue/1}; beginning to: ${q://QID30/ChoiceTextEntryValue/2}",
        "Q24": "Interests — what I named: ${q://QID24/ChoiceTextEntryValue/1}; ${q://QID24/ChoiceTextEntryValue/2}; ${q://QID24/ChoiceTextEntryValue/3},My recent change — before: ${q://QID30/ChoiceTextEntryValue/1}; beginning to: ${q://QID30/ChoiceTextEntryValue/2}",
        "Q37_1": "May share and compare after my review",
        "Q37_2": "May share and compare after my review",
        "Q37_3": "May share and compare after my review",
        "Q37_4": "May share and compare after my review",
        "Q37_5": "May share and compare after my review",
        "Q37_6": "May share and compare after my review",
        "Q37_7": "May share and compare after my review",
        "Q37_8": "May share and compare after my review",
        "Q37_9": "",
        "Q37_10": "May share and compare after my review",
        "Q38": "Yes, I am open to reviewing it later",
        "Q39": "Yes, I am open to reviewing it later",
        "Q40": "Participant N"
      },
      "topics": [
        {
          "id": "q1",
          "title": "In a group",
          "domain": 0,
          "permission": "Q37_2",
          "fields": [
            "Q1_1",
            "Q1_2",
            "Q1_3",
            "Q1_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "question": "Imagine you're working with a group and nobody is sure what to do next. Where would you place each of these?\n\n0 = wait / observe / support someone else's direction\n100 = step in / shape the direction",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do now",
                "color": "#e3e8dc",
                "angle": -150,
                "value": 61,
                "field": "Q1_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -55,
                "value": 85,
                "field": "Q1_2"
              },
              {
                "id": "expected",
                "label": "What people usually expect from me",
                "color": "#9aaea0",
                "angle": 40,
                "value": 32,
                "field": "Q1_3"
              },
              {
                "id": "seen",
                "label": "What I think people usually see me doing",
                "color": "#aaa0bd",
                "angle": 145,
                "value": 30,
                "field": "Q1_4"
              }
            ]
          },
          "raw": {
            "Q1_1": "61",
            "Q1_2": "85",
            "Q1_3": "32",
            "Q1_4": "30"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → filament length: 0.10 + 0.90 × value / 100. Colours and directions identify selves; they are fixed."
        },
        {
          "id": "q2",
          "title": "Someone close bothers me",
          "domain": 1,
          "permission": "Q37_3",
          "fields": [
            "Q3_1",
            "Q3_2",
            "Q3_3",
            "Q3_4"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "question": "Someone close to you does something that genuinely bothers you.\n\n0 = hold it back / protect the atmosphere\n100 = name the problem directly",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "angle": -140,
                "value": 50,
                "field": "Q3_1"
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "angle": -50,
                "value": 73,
                "field": "Q3_2"
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#9aaea0",
                "angle": 40,
                "value": 68,
                "field": "Q3_3"
              },
              {
                "id": "seen",
                "label": "What people close to me probably think I do",
                "color": "#aaa0bd",
                "angle": 130,
                "value": 42,
                "field": "Q3_4"
              }
            ]
          },
          "raw": {
            "Q3_1": "50",
            "Q3_2": "73",
            "Q3_3": "68",
            "Q3_4": "42"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → membrane opening: 8 + 164 × value / 100 degrees. Other geometry is fixed."
        },
        {
          "id": "q3",
          "title": "When overloaded",
          "domain": 2,
          "permission": "Q37_4",
          "fields": [
            "Q5_1",
            "Q5_2",
            "Q5_3"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "question": "You realize you are overloaded and starting to fall behind.\n\n0 = try to handle it privately first\n100 = let someone know / ask for help",
            "permission": "May share and compare after my review",
            "selves": [
              {
                "id": "now",
                "label": "What I usually do",
                "color": "#e3e8dc",
                "value": 61,
                "field": "Q5_1",
                "cx": -0.85,
                "cy": -0.48
              },
              {
                "id": "prefer",
                "label": "What I'd prefer to do",
                "color": "#d9a078",
                "value": 62,
                "field": "Q5_2",
                "cx": 0.85,
                "cy": -0.48
              },
              {
                "id": "expected",
                "label": "What I feel expected to do",
                "color": "#b59aee",
                "value": 81,
                "field": "Q5_3",
                "cx": 0,
                "cy": 0.87
              }
            ]
          },
          "raw": {
            "Q5_1": "61",
            "Q5_2": "62",
            "Q5_3": "81"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → cross-links: round(120 × (value / 100)^1.7). Tilt, base threads and colour stay fixed."
        },
        {
          "id": "q4",
          "title": "Making something",
          "domain": 3,
          "permission": "Q37_5",
          "fields": [
            "Q6_1",
            "Q6_2"
          ],
          "pendingInterests": [],
          "data": {
            "id": "making",
            "title": "How I make things",
            "context": "You are making something with no single correct outcome.",
            "left": "make a structure first and refine it",
            "right": "follow possibilities as they emerge",
            "answers": [
              {
                "perspective": "now",
                "value": 19,
                "field": "Q6_1",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What tends to happen now"
              },
              {
                "perspective": "prefer",
                "value": 20,
                "field": "Q6_2",
                "question": "You are making something with no single correct outcome.\n\n0 = make a structure first and refine it\n100 = follow possibilities as they emerge - What I'd prefer"
              }
            ],
            "permission": "May share and compare after my review",
            "featured": false,
            "invitation": true
          },
          "raw": {
            "Q6_1": "19",
            "Q6_2": "20"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Answer → contour amplitude: 0.01 + (value / 100)². Difference from Now → signed displacement. Missing Now gives no computed difference."
        },
        {
          "id": "q5",
          "title": "When a friend is upset",
          "domain": 1,
          "permission": "Q37_6",
          "fields": [
            "Q9a",
            "Q9b",
            "Q9a_7_TEXT",
            "Q9b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "selves": [
              {
                "id": "now",
                "color": "#e3e8dc",
                "answers": [
                  "listen",
                  "ask"
                ],
                "field": "Q9a",
                "raw": "Listen before responding,Ask what they need",
                "other": ""
              },
              {
                "id": "prefer",
                "color": "#d9a078",
                "answers": [
                  "listen",
                  "advice"
                ],
                "field": "Q9b",
                "raw": "Listen before responding,Offer advice",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q9a": "Listen before responding,Ask what they need",
            "Q9b": "Listen before responding,Offer advice",
            "Q9a_7_TEXT": "",
            "Q9b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established path. Shared paths form together; categories are not intensity scores."
        },
        {
          "id": "q6",
          "title": "An exhausting favour",
          "domain": 2,
          "permission": "Q37_7",
          "fields": [
            "Q12a",
            "Q12b",
            "Q12a_7_TEXT",
            "Q12b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "selves": [
              {
                "id": "likely",
                "color": "#e3e8dc",
                "label": "What would you probably do?",
                "answers": [
                  "frustrated",
                  "no"
                ],
                "raw": "say yes, but feel frustrated,explain that I can't",
                "field": "Q12a",
                "other": ""
              },
              {
                "id": "should",
                "color": "#d9a078",
                "label": "What do you feel you should do?",
                "answers": [
                  "depends",
                  "delay"
                ],
                "raw": "delay answering,decide based on who is asking",
                "field": "Q12b",
                "other": ""
              }
            ]
          },
          "raw": {
            "Q12a": "say yes, but feel frustrated,explain that I can't",
            "Q12b": "delay answering,decide based on who is asking",
            "Q12a_7_TEXT": "",
            "Q12b_7_TEXT": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Each selected response activates its established fold template. Replay shows the sheets coming together."
        },
        {
          "id": "q7",
          "title": "Interests & small joys",
          "domain": 3,
          "permission": "Q37_1",
          "fields": [
            "Q16_1",
            "Q16_2",
            "Q16_3",
            "Q18",
            "Q19",
            "Q19_8_TEXT",
            "Q41"
          ],
          "pendingInterests": [],
          "data": {
            "nickname": "Participant N",
            "interests": [
              {
                "id": "p14-interest-1",
                "text": "Listening to Albums",
                "field": "Q16_1",
                "motif": "album-sleeve",
                "depthThickness": 0.25,
                "reasonStatus": "selected_in_Q18",
                "reasons": [
                  "Enjoying the process",
                  "Having breathing space"
                ],
                "reasonFields": [
                  "Q18",
                  "Q19"
                ],
                "sourceQ18": "Listening to Albums",
                "sourceQ19": "Enjoying the process,Having breathing space",
                "story": "",
                "detail": "The record/sleeve is an editorial motif, not evidence that the participant listens on vinyl."
              },
              {
                "id": "p14-interest-2",
                "text": "Guitar",
                "field": "Q16_2",
                "motif": "guitar",
                "depthThickness": 0.25,
                "reasonStatus": "not_selected_in_Q18",
                "reasons": [],
                "reasonFields": [],
                "sourceQ18": "Listening to Albums",
                "sourceQ19": "Enjoying the process,Having breathing space",
                "story": "",
                "detail": "Guitar is the named interest; the survey does not specify Participant N's manner of engaging with it."
              },
              {
                "id": "p14-interest-3",
                "text": "Video games",
                "field": "Q16_3",
                "motif": "gamepad",
                "depthThickness": 0.25,
                "reasonStatus": "not_selected_in_Q18",
                "reasons": [],
                "reasonFields": [],
                "sourceQ18": "Listening to Albums",
                "sourceQ19": "Enjoying the process,Having breathing space",
                "story": "",
                "detail": "No genre, device, frequency or reason for gaming was recorded."
              }
            ]
          },
          "raw": {
            "Q16_1": "Listening to Albums",
            "Q16_2": "Guitar",
            "Q16_3": "Video games",
            "Q18": "Listening to Albums",
            "Q19": "Enjoying the process,Having breathing space",
            "Q19_8_TEXT": "",
            "Q41": ""
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "Approved motifs identify interests. Each confirmed reason controls one parameter in shared/q7-reasons.js. No inferred reasons are added."
        },
        {
          "id": "q8",
          "title": "What remained unseen",
          "domain": 4,
          "permission": "Q37_8",
          "fields": [
            "Q17a_1",
            "Q17a_2",
            "Q17a_3",
            "Q17b",
            "Q17b_7_TEXT"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q17a_1": "",
            "Q17a_2": "",
            "Q17a_3": "",
            "Q17b": "Uncertainty,Something else",
            "Q17b_7_TEXT": "Alcohol"
          },
          "status": "skipped",
          "scope": "May share and compare after my review",
          "note": "The event description was skipped. The selected Q17b factors remain in the source record, but no event visual is drawn."
        },
        {
          "id": "q21",
          "title": "Before / Becoming",
          "domain": 5,
          "permission": "Q37_10",
          "fields": [
            "Q21_1",
            "Q21_2"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant N",
            "before": "Workaholic",
            "now": "relax and think about life",
            "channel": "tempo",
            "beforeLevel": "high",
            "nowLevel": "low",
            "evidence": "Work-focused pace → relaxation and reflection. Slower motion is not inactivity.",
            "review": "Clear textual basis",
            "scope": "May share and compare after my review"
          },
          "raw": {
            "Q21_1": "Workaholic",
            "Q21_2": "relax and think about life"
          },
          "status": "mapped",
          "scope": "May share and compare after my review",
          "note": "One reviewed channel per Before / Beginning to pair. Shared low/high endpoints are visual presets, not measured scores."
        },
        {
          "id": "q22",
          "title": "A feared pattern",
          "domain": 5,
          "permission": "Q37_9",
          "fields": [
            "Q22"
          ],
          "pendingInterests": [],
          "data": {
            "name": "Participant N",
            "answer": "Working on repetitive things all the time",
            "category": "repetition",
            "evidence": "‘Repetitive things all the time’ supports an increase in orbital returns. This describes a feared pattern, not Participant N's present work routine.",
            "scope": "Researcher only (blank Q37_9)"
          },
          "raw": {
            "Q22": "Working on repetitive things all the time"
          },
          "status": "mapped",
          "scope": "Researcher only (blank)",
          "note": "One reviewed feared-pattern category. Formation shows a possible pattern, not a current trait or prediction."
        },
        {
          "id": "q42",
          "title": "A chosen story",
          "domain": 6,
          "permission": null,
          "fields": [
            "Q42"
          ],
          "pendingInterests": [],
          "data": null,
          "raw": {
            "Q42": "{\"schema\":\"PROFILEd.story.v3\",\"stories\":[]}"
          },
          "status": "blank",
          "scope": "No story",
          "note": "The approved story satellite retains its own source, domain, permission and invitation."
        }
      ],
      "reviewed": false,
      "foreground": [
        "q7",
        "q21"
      ],
      "invitations": [
        "q7",
        "q21"
      ]
    }
  ],
  "options5": [
    {
      "id": "listen",
      "raw": "Listen before responding",
      "meaning": "A returning path makes room to receive and stay with the response."
    },
    {
      "id": "ask",
      "raw": "Ask what they need",
      "meaning": "A path reaches out and returns, suggesting asking and waiting for a reply."
    },
    {
      "id": "advice",
      "raw": "Offer advice",
      "meaning": "A path extends outward, suggesting a possible direction."
    },
    {
      "id": "practical",
      "raw": "Help with something practical",
      "meaning": "A path bridges two sides, suggesting practical action."
    },
    {
      "id": "space",
      "raw": "Give them space",
      "meaning": "A path goes around the center, leaving an open space."
    },
    {
      "id": "depends",
      "raw": "It depends on the situation",
      "meaning": "A shared path branches into two possibilities."
    },
    {
      "id": "other",
      "raw": "Something else",
      "meaning": "A continuous strand joins the shared path. The original text supplies its meaning."
    }
  ],
  "options6": [
    {
      "id": "yes",
      "label": "say yes",
      "raw": "say yes",
      "rule": "Joining",
      "meaning": "Two edges join into a continuous surface, suggesting acceptance."
    },
    {
      "id": "frustrated",
      "label": "say yes, but feel frustrated",
      "raw": "say yes, but feel frustrated",
      "rule": "Joining with an inward fold",
      "meaning": "The sheets join but retain an inward fold, expressing agreement alongside frustration, not emotional intensity."
    },
    {
      "id": "no",
      "label": "explain that I can't",
      "raw": "explain that I can't",
      "rule": "Folding back",
      "meaning": "An outer sheet folds back, suggesting a limit rather than a broken relationship."
    },
    {
      "id": "smaller",
      "label": "offer a smaller version of what they're asking",
      "raw": "offer a smaller version of what they're asking",
      "rule": "Partial opening",
      "meaning": "A small part stays open, suggesting a limited offer; its size is not a measure of time."
    },
    {
      "id": "delay",
      "label": "delay answering",
      "raw": "delay answering",
      "rule": "Suspension",
      "meaning": "The edges approach without joining, suggesting an unanswered request; playback speed stays fixed."
    },
    {
      "id": "depends",
      "label": "decide based on who is asking",
      "raw": "decide based on who is asking",
      "rule": "Two fold directions",
      "meaning": "Two fixed fold directions suggest that the response depends on who is asking, not indecision or probability."
    },
    {
      "id": "other",
      "label": "other",
      "raw": "other",
      "rule": "Neutral sheet",
      "meaning": "A neutral sheet retains the place for the original text without inferring agreement, refusal or emotion."
    }
  ]
};
