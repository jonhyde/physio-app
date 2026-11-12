/* ------------------------------------------------------------------
   Exercise programmes and schedule.

   say     = spoken aloud (may be phonetically respelled for the voice)
   name    = plain-English heading shown on screen
   clinical= the physio's official name, small, for cross-reference
   ------------------------------------------------------------------ */

const BANDS = {
  fabric:  { label: 'Fabric loop',  colour: '#ffc857' },
  loop: { label: 'Exercise band', colour: '#ffc857' },
  pilates: { label: 'Pilates band', colour: '#6ea8fe' }
};

const EXERCISES = {

  /* ---------------- REHAB A ---------------- */

  sideways_walks: {
    name: 'Sideways band walks',
    clinical: 'Crab walks',
    band: 'fabric', bandNote: 'Just above your ankles',
    sets: 3, reps: '8 steps each way', perSide: false,
    tempo: 'Controlled',
    say: 'Sideways band walks. Drop into a half squat and stay low. Eight steps one way, then eight steps back.',
    steps: [
      'Fabric loop just above your ankles, feet shoulder width apart.',
      'Bend down into a half squat, deep enough to put tension in the band.',
      'Stay down at that height and step sideways, eight steps.',
      'Then step eight the other way, back where you started.',
      'Keep your chest up. Do not let the band drag your knees together.'
    ]
  },

  forward_back_walks: {
    name: 'Forward and back band walks',
    clinical: 'Monster walks',
    band: 'fabric', bandNote: 'Just above your ankles',
    sets: 3, reps: '8 steps each way', perSide: false,
    tempo: 'Controlled',
    say: 'Forward and back band walks. Shallow squat, stay down. Eight steps forwards, then eight backwards.',
    steps: [
      'Fabric loop just above your ankles, feet hip width apart.',
      'Bend into a shallow squat and stay down the whole time.',
      'Lift one foot, bring it in past your other foot, then out to the side and plant it.',
      'Do the same with the other foot. Eight steps forwards.',
      'Then eight steps backwards the same way.'
    ]
  },

  standing_side_lifts: {
    name: 'Standing leg lifts to the side',
    clinical: 'Hip abduction',
    band: 'pilates', bandNote: 'Knotted in the door at ANKLE height',
    sets: 3, reps: 12, perSide: true, groupBySide: true,
    tempo: 'Slow on the way back in',
    say: 'Standing leg lifts to the side. Take the leg out to the side, then bring it slowly back in. Twelve reps.',
    steps: [
      'Band looped around the ankle of the working leg, knotted in the door on your OTHER side.',
      'Stand on the free leg, hands on hips, chest tall.',
      'Lift the banded leg just off the floor and slightly in front of you.',
      'Take it out to the side, away from the door, knee slightly bent.',
      'Bring it slowly back in, resisting the band. That slow return is the work.'
    ]
  },

  hip_lifts: {
    name: 'Hip lifts',
    clinical: 'Bridge',
    band: 'fabric', bandNote: 'Around your thighs, above your knees',
    sets: 3, reps: 12, perSide: false,
    tempo: 'Slow both ways',
    say: 'Hip lifts. Twelve reps. Slowly up, slowly down.',
    steps: [
      'Fabric loop around your thighs, just above your knees.',
      'Lie on your back, knees bent, feet flat and hip width apart, arms by your sides.',
      'Push your hips up until you make a straight line from knees to shoulders.',
      'Lower back down.',
      'Slowly both ways. Do not rush it.'
    ],
    note: 'Keep both feet on the floor.'
  },

  /* ---------------- REHAB B ---------------- */

  standing_band_steps: {
    name: 'Standing band steps',
    clinical: 'Glute Band Stepping (Stationary)',
    band: 'fabric', bandNote: 'Around your ankles',
    sets: 3, reps: 8, perSide: true, groupBySide: false,
    tempo: 'Quick and sharp',
    say: 'Standing band steps. Quick steps, eight each direction.',
    blocks: ['Out to the side', 'At an angle behind you', 'Straight back behind you'],
    steps: [
      'Fabric loop around your ankles. Stand tall, keep the band under tension.',
      'Only one foot moves. The other stays planted.',
      'Step it out and back in, eight times, for each of the three directions.',
      'Then swap feet and do all three again.',
      'Quick, sharp steps. This one is meant to be fast.'
    ]
  },

  squats: {
    name: 'Squats',
    clinical: 'Squat',
    band: 'fabric', bandNote: 'Around your thighs, above your knees',
    sets: 3, reps: 10, perSide: false,
    tempo: 'Controlled',
    say: 'Squats. Ten reps. Shallow only. No deeper than a Pilates squat.',
    steps: [
      'Fabric loop around your thighs, just above your knees.',
      'Feet shoulder width apart, arms folded across your chest, chest tall.',
      'Sit down no further than a Pilates squat.',
      'Push your knees outwards against the band as you go.',
      'Drive up through your heels to stand.'
    ]
  },

  single_leg_mini_squats: {
    name: 'Single leg mini squats',
    clinical: 'Quarter depth single leg squat with isometric hip external rotation',
    band: 'pilates', bandNote: 'Knotted in the door at KNEE height',
    sets: 3, reps: 12, perSide: true, groupBySide: true,
    tempo: 'Controlled',
    say: 'Single leg mini squats. Twelve small squats. Push out against the band the whole time.',
    steps: [
      'Band around the knee of the working leg, knotted in the door on your OTHER side.',
      'Feet together, hands on hips.',
      'Weight on the banded leg, lift the other foot just off the floor.',
      'Bend the standing knee a small way only, about a quarter down.',
      'Push back up through your heel.',
      'The band pulls your knee inwards. Push out against it the whole time, down and up.'
    ]
  },

  split_squats: {
    name: 'Split squats',
    clinical: 'Split squat with isometric hip abduction',
    band: 'pilates', bandNote: 'Knotted in the door at KNEE height',
    sets: 3, reps: 10, perSide: true, groupBySide: true,
    tempo: 'Controlled',
    say: 'Split squats. Banded leg in front. Ten reps. Keep pushing out against the band.',
    steps: [
      'Band around the knee of the working leg, knotted in the door on your OTHER side.',
      'The banded leg goes IN FRONT. Step the other foot back into a split stance.',
      'Chest tall. Bend both knees and lower straight down.',
      'Push up through your front heel and your back toes.',
      'Keep pushing out against the band throughout.'
    ]
  },

  /* ---------------- REHAB C ---------------- */
  kneeling_side_plank: {
    name: 'Side plank leg lifts', clinical: 'Hip abduction in kneeling side plank',
    band: 'loop', bandNote: 'Around your knees',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled',
    sideLabel: 'Leg lifting',
    stepsForSide: leg => {
      const top=leg.toLowerCase();
      const bottom=leg==='Left' ? 'right' : 'left';
      return [
        'Put the band around your knees.',
        `Lie on your ${bottom} side.`,
        `Bend your bottom ${bottom} knee to 90°. Keep your top ${top} leg straight. Support yourself on your ${bottom} forearm.`,
        'Lift your body into a side plank, making a straight line from your head to the knee on the floor.',
        'Keep your toes pointing forwards.',
        `Lift your top ${top} leg, then lower it slowly.`
      ];
    }
  },
  single_leg_bridge: {
    name: 'Single-leg bridges', clinical: 'Single leg glute bridge',
    band: 'loop', bandNote: 'Around your knees',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled',
    stepsForSide: leg => {
      const supporting=leg.toLowerCase();
      const lifted=leg==='Left' ? 'right' : 'left';
      return [
        'Put the band around your knees.',
        'Lie on your back with your knees bent and your heels on the floor. Keep your toes raised and tension on the band throughout.',
        `Shift your weight onto your ${supporting} leg and lift your ${lifted} foot off the floor. Keep your supporting ${supporting} heel in place.`,
        'Lift your hips until there is a straight line from your knee to your shoulders, then lower slowly.'
      ];
    }
  },
  fire_hydrant: {
    name: 'Tabletop side knee raise', clinical: 'Fire hydrant with an exercise band in four point kneeling',
    band: 'loop', bandNote: 'Around your thighs, just above your knees',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    sideLabel: 'Knee lifting', tempo: 'Slow and controlled',
    stepsForSide: leg => [
      'Put the exercise band around your thighs, just above your knees.',
      'Get onto all fours, hands below your shoulders and knees below your hips.',
      `Keeping your ${leg.toLowerCase()} knee bent, lift it out to the side, then lower it back slowly.`,
      'Keep tension on the band throughout. Avoid twisting your hips or upper body.'
    ]
  },
  short_lever_copenhagen: {
    name: 'Supported side plank — bottom knee lifts', clinical: 'Short lever Copenhagen',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    equipment: 'Bench', tempo: 'Slow and controlled',
    sideLabel: 'Bottom leg moving',
    stepsForSide: leg => {
      const bottom=leg.toLowerCase();
      const top=leg==='Left' ? 'right' : 'left';
      return [
        `Lie on your ${bottom} side with your elbow below your shoulder.`,
        `Rest your bent top ${top} leg on the bench.`,
        `Keep your bottom ${bottom} leg bent at the knee underneath it.`,
        `Push through your arm and lift your body into a straight line from your supported ${top} knee to your shoulder.`,
        'Hold this position.',
        `Keep your bottom ${bottom} knee bent as you lift that leg towards the underside of the bench, then lower it slowly.`,
        'Keep your hips facing forward throughout.'
      ];
    }
  }
};

/* Current exercise programmes. */
const REHAB_PROGRAMME = {
  crab_walks: {
    name: 'Sideways band walks', clinical: 'Crab walks with an exercise band around ankles',
    band: 'loop', bandNote: 'Just above your ankles',
    sets: 3, reps: 8, restSeconds: 30, tempo: 'Controlled',
    steps: [
      'Stand with your feet shoulder width apart, head up and chest tall.',
      'Place the band just above your ankles and bend into a half squat with tension in the band.',
      'Stay in the half squat as you step sideways, then walk back in the opposite direction.',
      'Keep your chest tall and resist the band pulling your leg across as you step.'
    ]
  },
  bench_copenhagen: {
    name: 'Bench side plank with leg lift', clinical: 'Short lever Copenhagen',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled', sideLabel: 'Bottom leg moving',
    steps: [
      'Lie on your side with your elbow below your shoulder. Keep your bottom leg straight beneath the bench and rest your bent top leg on the bench.',
      'Push through your arm to lift your body into a straight line from your supported knee to your shoulder.',
      'Hold that position while you lift your bottom leg towards the underside of the bench, then lower it.',
      'Keep your hips facing forward throughout.'
    ],
    note: 'Use a bench at the gym. Move slowly and with control.'
  },
  split_stance_rotation: {
    name: 'Split-stance hip turns', clinical: 'Split stance standing hip internal rotations against a cable',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Controlled', sideLabel: 'Front leg',
    steps: [
      'Stand side-on to a cable machine or resistance band in a split stance, with your outside leg in front.',
      'Hold the cable or band with your outside hand.',
      'Pull against the resistance by turning your hips towards your front leg. Drive the turn from your hips and feel the glutes in your front leg work.'
    ]
  },
  leg_press: {
    name: '45-degree leg press', clinical: '45 degree leg press',
    sets: 3, reps: 8, restSeconds: 30, tempo: 'Slow down, slightly quicker up',
    steps: [
      'Sit with your feet hip width apart on the plate and your back against the seat.',
      'Push the plate up, release the support and bend your knees to lower the plate towards you.',
      'Push through your heels to move the plate back up. Keep a slight bend in your knees at the top.'
    ],
    note: '50 kg leg press. Load it heavily and adjust the weight as appropriate. Lower slowly to a comfortable range, then push back up slightly quicker and more forcefully.'
  },
  wall_fire_hydrant: {
    name: 'Wall-supported knee raise', clinical: 'Fire hydrants with hip hinge',
    band: 'loop', bandNote: 'Around your thighs, just above your knees',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled', sideLabel: 'Standing leg',
    steps: [
      'Put the band around your thighs just above your knees. Stand facing away from the wall with your head up and chest tall.',
      'Shift your weight onto your standing leg. Bend the other knee to 90 degrees and put the sole of that foot against the wall.',
      'Hinge forward slightly at the hips and soften your standing knee.',
      'Keep the outside of your foot against the wall as you move your raised leg away from your standing leg, then return it to the start.',
      'Keep your hips facing forwards.'
    ],
    note: 'Use heavy resistance. Move slowly and with control, pivot on your toes against the wall and keep your weight over the standing leg.'
  },
  lateral_step_down: {
    name: 'Side step-down with heel tap', clinical: 'Lateral step down with heel tap',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled lowering', sideLabel: 'Leg on the step',
    steps: [
      'Stand tall on the edge of a step and shift your weight onto one foot. Hold the other foot in the air beside the step.',
      'Keep your chest tall and bend your standing knee until your free heel touches the floor.',
      'Push through the foot on the step to stand up again. Keep your hips level and your standing knee neutral throughout.'
    ],
    note: 'Use the edge of the step so you can lower straight down. Keep your pelvis steady. Hold a weight or wear a heavy backpack and adjust the weight as appropriate.'
  },
  standing_adduction: {
    name: 'Standing inward leg pulls', clinical: 'Hip adduction in standing',
    band: 'loop', bandNote: 'Just above your ankle, anchored at ankle height on the same side',
    sets: 3, reps: 10, perSide: true, groupBySide: true, restSeconds: 30,
    tempo: 'Slow and controlled',
    steps: [
      'Stand with your feet hip width apart, head up and chest tall. Put the band just above the working ankle and anchor it at ankle height on that same side.',
      'Put your hands on your hips, shift your weight onto the unbanded leg and lift the banded foot off the floor.',
      'Keep your chest upright and your moving knee slightly bent. Draw the banded leg inwards, then slowly resist the pull as you return it outwards.'
    ],
    note: 'Use a heavy band or cable resistance. Squeeze your inner thigh at the end of the inward movement.'
  },
  goblet_squat: {
    name: 'Kettlebell goblet squat', clinical: 'Goblet squat with a kettlebell',
    sets: 3, reps: 10, restSeconds: 30, tempo: 'Slow and controlled lowering',
    steps: [
      'Stand with your feet slightly wider than hip width, toes pointing out, and bring the kettlebell up to your chest.',
      'Keep your chest tall and bend into a squat, keeping your knees in line with your toes.',
      'Keep your weight through your heels and push through them to stand back up.'
    ],
    note: '20 kg kettlebell. Lower slowly within a comfortable range. Use a heavy load and adjust the weight as appropriate.'
  }
};
Object.assign(EXERCISES, REHAB_PROGRAMME);

const SESSIONS = {
  A: { title: 'Rehab A', order: ['crab_walks','bench_copenhagen','split_stance_rotation','leg_press'] },
  B: { title: 'Rehab B', order: ['wall_fire_hydrant','lateral_step_down','standing_adduction','goblet_squat'] },
  C: { title: 'Rehab C', archived: true, order: ['kneeling_side_plank','single_leg_bridge','fire_hydrant','short_lever_copenhagen'] },
  oldA: { title: 'Rehab A (August 2026)', archived: true, order: ['sideways_walks','standing_side_lifts','squats','hip_lifts'] },
  oldB: { title: 'Rehab B (August 2026)', archived: true, order: ['standing_band_steps','forward_back_walks','single_leg_mini_squats','split_squats'] }
};

const SCHEDULE = { start: Date.UTC(2026, 10, 12), intervalDays: 2, order: ['A', 'B'] };

function scheduledSession(date, afterToday = false) {
  const dayMs = 86400000;
  // Use local calendar dates so clock changes never shift the rotation.
  const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const firstDay = today + (afterToday ? dayMs : 0);
  const slot = Math.max(0, Math.ceil((firstDay - SCHEDULE.start) / (SCHEDULE.intervalDays * dayMs)));
  const scheduledDay = SCHEDULE.start + slot * SCHEDULE.intervalDays * dayMs;
  const utcDate = new Date(scheduledDay);
  return {
    key: SCHEDULE.order[slot % SCHEDULE.order.length],
    date: new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate()),
    today: scheduledDay === today
  };
}

const CONFIG = {
  restSeconds: 15,
  massageMinutesPerLeg: 3,
  leadingLeg: 'Left',
  defaultVoice: 'Samantha',
  massageAvoid: 'Stay off the side of your hip and off your glutes.',
  massageOk: 'IT band, quads, hamstrings, calves and adductors are all fine.'
};
