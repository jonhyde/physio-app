/* ------------------------------------------------------------------
   The programme. Everything clinical lives here and nowhere else.
   Prescribed by Reiss, August 2026. Plain-English copy throughout.

   say     = spoken aloud (may be phonetically respelled for the voice)
   name    = plain-English heading shown on screen
   clinical= the physio's official name, small, for cross-reference
   ------------------------------------------------------------------ */

const BANDS = {
  fabric:  { label: 'Fabric loop',  colour: '#ffc857' },
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
    note: 'Single leg progression is authorised but NOT active. Stay on two legs.'
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
    override: {
      title: 'Shallow only',
      body: 'Go down no further than a Pilates squat. Deeper squeezes the sore tendon against the bone, which is exactly what the shockwave is treating.',
      stock: 'Bend down into a full depth squat.'
    },
    steps: [
      'Fabric loop around your thighs, just above your knees.',
      'Feet shoulder width apart, arms folded across your chest, chest tall.',
      'Sit down only as far as a Pilates squat.',
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
  }
};

const SESSIONS = {
  A: { title: 'Rehab A', order: ['sideways_walks','forward_back_walks','standing_side_lifts','hip_lifts'] },
  B: { title: 'Rehab B', order: ['standing_band_steps','squats','single_leg_mini_squats','split_squats'] }
};

/* Mon A, Tue B, Thu A, Sat B. Everything else is a rest day.
   Four sessions a week means the A/B alternation lands on the same
   weekdays every week, so this is a fixed map rather than a rolling one. */
const WEEK = { 0:null, 1:'A', 2:'B', 3:null, 4:'A', 5:null, 6:'B' };

const CONFIG = {
  restSeconds: 30,
  massageMinutesPerLeg: 3,
  leadingLeg: 'Left',        // more symptomatic side goes first
  defaultVoice: 'Samantha',
  massageAvoid: 'Stay off the side of your hip and off your glutes.',
  massageOk: 'IT band, quads, hamstrings, calves and adductors are all fine.'
};
