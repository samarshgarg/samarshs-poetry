/* ============================================================
   Samarsh's Poetry — content model
   All poems by Samarsh Garg. Text preserved faithfully.
   ============================================================ */

const CATEGORIES = {
  heart: {
    name: "Matters of the Heart",
    tagline: "Love, in every language it speaks.",
    blurb: "Verses of adoration, longing and the trembling first spark — where the heart writes faster than the mind can follow.",
    accent: "#e8577d",
    accent2: "#ff9a76",
    glyph: "❤",
    img: { w: 1600, h: 900, prompt: "Dreamy romantic scene, two silhouettes at golden hour under a vast rose-pink sky, soft bokeh light, delicate ink-and-watercolour texture, cinematic, warm blush and coral tones. No text." }
  },
  wounds: {
    name: "Wounds & Farewells",
    tagline: "The ache that taught the heart its depth.",
    blurb: "Heartbreak, unrequited devotion and quiet goodbyes — the poems written with a weeping pen that still hopes.",
    accent: "#8a7fff",
    accent2: "#5bc0eb",
    glyph: "✦",
    img: { w: 1600, h: 900, prompt: "Melancholic scene, a lone figure by a rain-streaked window at dusk, indigo and violet palette, single wilting rose, moody cinematic light, painterly watercolour bleed. No text." }
  },
  kindred: {
    name: "Kindred",
    tagline: "Family, friends and the bonds that hold.",
    blurb: "Tributes to the people who become home — a mother, a sister, friends met by fate, and the celebrations between.",
    accent: "#e0a458",
    accent2: "#f6c667",
    glyph: "❈",
    img: { w: 1600, h: 900, prompt: "Warm intimate gathering, hands joined around soft golden lamplight, autumn amber and honey tones, cosy nostalgic mood, gentle grain, hand-painted illustration style. No text." }
  },
  reflections: {
    name: "Reflections",
    tagline: "On time, meaning and the human mind.",
    blurb: "Philosophical wandering — the nature of happiness, the weight of words, the passage of time and the questions that keep us awake.",
    accent: "#3ec6a0",
    accent2: "#8ee4af",
    glyph: "◈",
    img: { w: 1600, h: 900, prompt: "Contemplative surreal landscape, a figure seated before a giant clock dissolving into stars and galaxies, teal and emerald palette, cosmic philosophical mood, fine ink linework. No text." }
  },
  self: {
    name: "The Inner Self",
    tagline: "Solitude, struggle and the search within.",
    blurb: "Introspection turned inward — the confessions of a restless heart learning to live with itself.",
    accent: "#7ea8ff",
    accent2: "#9d8cff",
    glyph: "☾",
    img: { w: 1600, h: 900, prompt: "Introspective portrait, a solitary silhouette walking a moonlit path through fog, cool blue and silver palette, reflective quiet mood, soft double-exposure with stars. No text." }
  },
  world: {
    name: "The World Around",
    tagline: "Society, nature and everyday odes.",
    blurb: "The gaze turned outward — mornings and weekends, coffee and climate, the noise of the world and the peace beneath it.",
    accent: "#5bb06f",
    accent2: "#c9d95a",
    glyph: "❋",
    img: { w: 1600, h: 900, prompt: "Vibrant everyday-life collage, a sunlit city morning blending into lush green nature, coffee steam, birds and leaves, fresh green and warm sunlight palette, lively editorial illustration. No text." }
  }
};

/* Font pairings available (loaded in HTML). Each poem picks one. */
const FONTS = {
  romantic:   { title: "'Cormorant Garamond', serif", body: "'EB Garamond', serif" },
  elegant:    { title: "'Playfair Display', serif",   body: "'EB Garamond', serif" },
  modern:     { title: "'Fraunces', serif",           body: "'Spectral', serif" },
  airy:       { title: "'Marcellus', serif",          body: "'Spectral', serif" },
  bold:       { title: "'Bodoni Moda', serif",        body: "'EB Garamond', serif" },
  hand:       { title: "'Cormorant Garamond', serif", body: "'Spectral', serif" },
  clean:      { title: "'Fraunces', serif",           body: "'EB Garamond', serif" }
};

/* Helper to keep stanza authoring compact */
const S = (...lines) => lines;

const POEMS = [
  /* ---------------- MATTERS OF THE HEART ---------------- */
  {
    slug: "pleasant-surprise", cat: "heart", title: "A Pleasant Surprise", kicker: "A love that arrived unannounced",
    font: "romantic", accent: "#e8577d",
    img: { w: 1400, h: 1000, prompt: "Soft portrait of a woman with expressive eyes, a faint 'Twix' smile, blush-pink and cream watercolour, delicate and dreamy, tender mood. No text." },
    stanzas: [
      S("I am still struck by,","What's in my destiny lie","While I was still pondering over my past","I met someone so fast."),
      S("But I feel like God is playing games with me","And hurting me in a spree","Although I love spending time with her","This is also not gonna last forever."),
      S("She is sweet and adorable,","Emotional like me but stable,","Her eyes and voice says a lot,","What she wants and what she not."),
      S("Her heart carries pain she hides","Reason she don't share but I can previse","Only Trust is her main enemy,","One day it will be your best friend don't worry."),
      S("She gets angry and quiet at same time","Takes cute revenge :\" As u did now turn is mine\"","Now it has been quite a short while","And I already miss her \"Twix\" smile"),
      S("My past and future scares","Its only my present that saves","Dont know where I am going","Just flowing Just flowing"),
      S("I may crib I may cry,","But one good thing happened to me that you are not a lie.")
    ]
  },
  {
    slug: "just-for-you", cat: "heart", title: "Just for You", kicker: "Lines for a heart never to be broken",
    font: "airy", accent: "#f06e9c",
    img: { w: 1400, h: 1000, prompt: "A limitless open sky at dawn with a single bird ascending, pastel rose and gold, feeling of boundless freedom and tenderness, minimal watercolour. No text." },
    stanzas: [
      S("To the heart which is meant to be loved and never broken","These are the few lines which must be spoken"),
      S("To the beautiful face that is always around me","I beg God I forever wish to see"),
      S("To the voice that makes my soul so serene,","Even the nature thinks that's quite mean,"),
      S("To the smile that is so honest i believe","Shall never be harmed or sealed"),
      S("No boundaries should stop you to fly,","Just look above and there is the limitless sky,"),
      S("Just for a minute imagine me with you","I can live my life with that much love you do")
    ]
  },
  {
    slug: "my-mighty-wish", cat: "heart", title: "My Mighty Wish", kicker: "Love in every language it can travel",
    font: "romantic", accent: "#e8577d",
    img: { w: 1400, h: 1000, prompt: "Two distant stars connected by a thread of light across a night sky, deep rose and midnight blue, longing and devotion, fine celestial illustration. No text." },
    stanzas: [
      S("Having said that,","I can't handle a minute without our lovely regular chat","My inner voice is always in checks everywhere","Just to make sure you are there"),
      S("You can go as far as possible","My soul will always be there & that's not fallible","If I hurt you, I will hate myself to the extent","That I will feel dead without God's consent"),
      S("Although you take me as only a good friend","I believe love comes in different languages, so to defend","When you think are lonely and no one around","Just listen to your heart anytime you will hear my sound"),
      S("You don't know how much I love you and treasure","Even if there was some tool that also cannot measure","As u said we cannot be together","I Just wish the almighty to keep you happy and in good health forever")
    ]
  },
  {
    slug: "good-to-know-you", cat: "heart", title: "Good to Know You", kicker: "For me, love is nothing but knowing you",
    font: "elegant", accent: "#ef7aa0",
    img: { w: 1400, h: 1000, prompt: "Close-up of two coffee cups and clasped hands, warm café light, soft focus, blush and caramel palette, intimate and gentle. No text." },
    stanzas: [
      S("Just a moment away from you feels like","There is nothing left in my life","I speak I weep I smile all the time","when your voices in my ears chime"),
      S("True Love is the emotion that never changes or dies","We need to do it just to realize","Time can change one's mind","But one's heart remains constant all the time"),
      S("I can give whatever you want me to","Even if it was to stay away from you","I don't know what love is to you","Coz For me it's nothing but knowing you")
    ]
  },
  {
    slug: "love-is-beautiful", cat: "heart", title: "Love is Beautiful", kicker: "Why is the world suddenly so beautiful?",
    font: "romantic", accent: "#f4508a",
    img: { w: 1400, h: 1000, prompt: "A meadow bursting into bloom around a lone figure, flowers and birds, rose and spring-green, euphoric first-love mood, luminous watercolour. No text." },
    stanzas: [
      S("Why am I imagining you all the time","This question is always on my mind","Here comes the answer from my heart","Fear of going away from her makes u hurt"),
      S("Why is world suddenly so beautiful around me","Is it coz everything else i don't want to see","The trees , the flowers, the birds, all saying one thing","You Love her more than anything"),
      S("Why love is so complicated","Everyone in it feels agitated","I doubt is it a true emotion anymore","Coz people go in and out like an open door"),
      S("Why there are fights in relations","Are these part of love or blamed on situations","Respect, honesty and trust are the only pillars of love","There is nothing below and nothing above"),
      S("Why love demands give and take","If it does then I believe its just fake","I just learnt to give for others sake","For me that's not a mistake"),
      S("'Why' is the question in love everyone ask","Some get pain and some get bask","No matter how love treats you","But once in life everyone should truly do")
    ]
  },
  {
    slug: "first-impression", cat: "heart", title: "First Impression", kicker: "A face defining grace and sheen",
    font: "elegant", accent: "#e8577d",
    img: { w: 1400, h: 1000, prompt: "Artistic portrait of a woman wearing spectacles, eyes bright and knowing, elegant rose and pearl tones, refined and graceful, editorial watercolour. No text." },
    stanzas: [
      S("O God! What have I seen","A face defining grace and sheen","Made my soul so serene","Even nature thinks that's quite mean"),
      S("Never thought getting struck like this","Is she a catch or a miss","Whoever she is","My heart trembled with bliss"),
      S("Eyes behind those spectacles","Seems narrating romantic chronicles","Beautiful, naughty and joyous words crackles","For eyes who want to see the world without any shackles"),
      S("Smile that can make seriousness shy","Elegance and innocence, comments might often pass by","Personality which always want to fly","So powerful that never give up or cry"),
      S("Although I never met you in person","But would like an inception","For all this is my imagination and perception","As on me, that's your first impression")
    ]
  },
  {
    slug: "would-be-partner", cat: "heart", title: "Would-be Partner", kicker: "The heart chose only one",
    font: "romantic", accent: "#ef7aa0",
    img: { w: 1400, h: 1000, prompt: "Tender illustration of a protective embrace, a child-like softness within, warm rose and gold, promise and devotion, gentle painterly style. No text." },
    stanzas: [
      S("We humans","are full of questions","Answers we try to find","Running wild and blind"),
      S("The only question I care","which often makes me scare","I never hurt anyone close I know","For I Live for them as my life grow"),
      S("Met a beautiful person","I see as my family addition","Somehow we become so close","I like to believe the destiny chose"),
      S("A child in her so cute","Like a melody from a flute","She hides this often","Being hard outside and inside soften"),
      S("Dont mind her anger","Its ephemeral and squanders","Only mind her sadness","For her I made a pact with happiness"),
      S("Hope u understand me","All I need is always you with me","You can always a find better person","But the heart chose only one"),
      S("My love and support surrounds u always","Inside and out forever stays","Hope you also love me like I do","I promise to build a wonderful world for you")
    ]
  },
  {
    slug: "our-relationship-pledge", cat: "heart", title: "Our Relationship Pledge", kicker: "I just need your love and care",
    font: "airy", accent: "#f4508a",
    img: { w: 1400, h: 1000, prompt: "Two hands holding a single thread that ties a knot of light against a soft rose sky, symbolic of a vow, blush and amber, serene devotion. No text." },
    stanzas: [
      S("Just because we are far","Should not tear us apart","God will see whatever is fair","I just need your love and care"),
      S("Just because we fight","should never be our relation's plight","shall give all my time to spare","I just need your love and care"),
      S("Just because we cant understand","should never give up on trying again","Bond I will create seen so rare","I just need your love and care"),
      S("Just because we struggle for being compatible","Should never make us lose and unstable","Will stand by you till I last breathe air","I just need your love and care"),
      S("Just because we are sad","Should never stop ourselves to be glad","Will keep bringing Smile till all your sorrow scare","I just need your love and care"),
      S("Just because we make mistakes","Should never make our hearts devastate","Why and how much I shall love you impossible to share","I just need your love and care")
    ]
  },
  {
    slug: "will-you-be-my-valentine", cat: "heart", title: "Will You Be My Valentine", kicker: "That heart calls for just one line",
    font: "romantic", accent: "#e8577d",
    img: { w: 1400, h: 1000, prompt: "Romantic valentine scene, sunlit silhouette offering a rose, hearts of light drifting upward, warm red and rose-gold, joyful and hopeful. No text." },
    stanzas: [
      S("Filling a blank space","Satisfying heart and there is happy face","That heart calls for just one line","Will you be my valentine"),
      S("Having this wild thought","With you life will be all sort","For you are that shine of a sunshine","Will you be my Valentine"),
      S("Forever hand in hand we go","Faith and Love we shall bestow","Always want you to be mine","Will you be my Valentine"),
      S("Eyes shall open to see each other","World we create where noone bother","Dont want God to change our destine","Will you be my Valentine"),
      S("Dont be afraid and think much","Just come to me and clutch","Never u shall feel alone and always be fine","Will you be my Valentine")
    ]
  },
  {
    slug: "committed", cat: "heart", title: "Committed", kicker: "You are the only one I was looking for",
    font: "elegant", accent: "#ef7aa0",
    img: { w: 1400, h: 1000, prompt: "A calm woman with a serene smile bathed in soft dawn light, gentle rose and cream, warmth and acceptance, delicate painterly portrait. No text." },
    stanzas: [
      S("Are you the one","mind asks this question","heart makes confused situation","Answer lies with noone"),
      S("the first day, the streak of happiness","came as a god's bless","felt by my soul","Seems everything you stole"),
      S("your soft and delicate nature","strikes on heart and puncture","wish u remain like this forever","no surrounding shall distort this ever"),
      S("what can i say about your beautiful smile","shall never stop as it refreshes my mind","positive energy it creates inside","Wish to see always through my eyes"),
      S("I know less expressive you are","you find it easy inside but outside its hard","all your fear and hardship will shoo away","when my hand on your heart forever stays"),
      S("A fair God believer","A true family lover","A down to earth personality","A lady in its entirety"),
      S("Calm and happy you like to be","Anger just comes and flees","Loud innocence on your face","As sweet child inside you plays"),
      S("With all your goods and bads","I accept with my open hands","Dont worry ever when i am there","I ll never give up my support I swear"),
      S("For you, I can say endless words","Feelings are always fighting with swords","But One thing I am sure","That you are the only one I was looking for"),
      S("Thanks for coming in my life")
    ]
  },
  {
    slug: "defining-love", cat: "heart", title: "Defining Love?", kicker: "A universal feeling, forever",
    font: "modern", accent: "#f4508a",
    img: { w: 1400, h: 1000, prompt: "Abstract of many hands reaching toward a single glowing heart, warm rose and gold rays, universal love, elegant symbolic illustration. No text." },
    stanzas: [
      S("Love is honest","Never makes one lie","Till the love survive"),
      S("Love is eternal","Increases the more you do","To someone who loves u too"),
      S("Love is a bliss","Brings smile on face","Like a gift from God's grace"),
      S("Love is hurtful","An intolerable pain","when relationships go in vain"),
      S("Love is a song","needs no words","Like melody from chirping birds"),
      S("Love is hope","Strenght it becomes","No matter all the troubles circums"),
      S("Love is support","Like a ladder it stays","while life climbs its ways"),
      S("Love is constant","Universal feeling which is forever","God created for binding all of us together")
    ]
  },
  {
    slug: "connect-but-not-met", cat: "heart", title: "Connect but Not Met", kicker: "A bond without much of a bond",
    font: "airy", accent: "#ef7aa0",
    img: { w: 1400, h: 1000, prompt: "Two profiles facing away yet linked by a ribbon of light, soft rose and teal, connection across distance, refined double-exposure. No text." },
    stanzas: [
      S("Today what I am writing","Is smethng quite new and exciting","About smeone i havnt met or seen","Few words my mind have deemed"),
      S("She speaks but want to speak more","like an HR others she likes to explore","works hard and slowly enjoy things","As a ship sails without wings"),
      S("Notorious is her mind","Some can read others have to find","Her smile is so cute","Like a melody from the flute"),
      S("Likes company with tiny tots","Good friends she makes not in lots","Enjoys travelling and little happiness around","Moves on for the lost and matters the found"),
      S("Calm and happy she likes to be","Anger just comes and flees","Loud innocence on her face","As sweet child inside her plays"),
      S("A family lover","A fair God believer","A down to earth personality","what to say : A lady in its entirety"),
      S("Seldom u find such humans i bet","Feel this connect widout much connect","No offense but Just predicting her nature","Rest leaving to time as it mature")
    ]
  },
  {
    slug: "falling-in-love", cat: "heart", title: "Falling in Love", kicker: "My love is in full swing",
    font: "romantic", accent: "#e8577d",
    img: { w: 1400, h: 1000, prompt: "Joyful couple silhouette spinning in a rain of petals and music notes, warm rose and gold, exuberant first-love energy, lively watercolour. No text." },
    stanzas: [
      S("Finally its happening","My heartbeats are fastening","Songs and lyrics are whistling","My love is in full swing"),
      S("Dont know what will happen next","She also loves me the same I bet","Happiness and support I shall always get","Leaving to God and destiny rest"),
      S("Till my death I shall keep my trust","Without any greed or lust","Staying together with family a must","Shall Escape us from all the fuss"),
      S("The past, present and future","Will always give pain and cure","Strength I will be yours for sure","Shall hold your hands and make you secure"),
      S("As we grow our love also grows","Without ego and misunderstandings between us","We will fight like a child and love like his innocence","The couple from whom the world shall be jealous")
    ]
  },
  {
    slug: "mesmerised", cat: "heart", title: "Mesmerised", kicker: "Lost in her, whole",
    font: "elegant", accent: "#f06e9c",
    img: { w: 1400, h: 1000, prompt: "Ethereal fairy-like woman dissolving into soft light and stars, dreamy rose and lilac, enchantment and wonder, luminous fantasy illustration. No text." },
    stanzas: [
      S("The way she speaks","The way she sees","Feels like a blowing my mind","I never saw a girl so kind"),
      S("Her lips so beautiful","Her heart so dreamful","Feels like touching my soul","I am lost in her whole"),
      S("The sound she makes","The smile she breaks","Feels like I am in heaven","The fairy I always imagine"),
      S("The cuteness she wears","The sadness of her tears","Feels like all is mine","As I love her like a divine")
    ]
  },

  /* ---------------- WOUNDS & FAREWELLS ---------------- */
  {
    slug: "feeling-hurt", cat: "wounds", title: "For Me, Love Is Like This", kicker: "Feeling Hurt",
    font: "hand", accent: "#8a7fff",
    img: { w: 1400, h: 1000, prompt: "A single hand reaching through falling petals in muted indigo light, quiet ache and longing, violet and grey watercolour, tender melancholy. No text." },
    stanzas: [
      S("Am I demanding too much,","Asking myself the question such","Don't know how you think so,","For me Love is like this I know"),
      S("Care and affection are its heart and soul","If absent then there is some loophole","Don't know how to stop it to grow","For me love is like this I know"),
      S("Fights and quarrels are its part","That no one would like to start,","Don't know how it will low","For me love is like this i know"),
      S("People have different ways of expressing","Some open up and others suppressing","Don't know how you think about my flow","For me love is like this i know"),
      S("It makes me agitated","When someone has not much reciprocated","Don't know how ahead shall I go","For me love is like this I know"),
      S("Chance is given to one who makes you realize once","Like you love she also does","Don't know how shall I make you know","For me love is like this i know"),
      S("Although, pain often comes from love you do","But beginning to get little happiness from you","Don't know how again pain started to show","For me love is like this I know"),
      S("I don't wanna make realize or change anyone for me,","Just wanna love someone as is she","Don't know how our thing could not glow","For me love is like this I know"),
      S("I might be difficult and confusing to you","But easy for the ones with love they truly do","Don't know how you could not know","For me love is like this I know"),
      S("Neither angry nor blaming","As for each, Love has different defining","Don't know how I undersood it so slow","For me love is like this I know"),
      S("Now I don't want to fall anymore,","Tried my best to do with all in my store","Don't know how in future will my loveboat row","For me love is like this I know"),
      S("For you all I can wish is good luck","In life, You shall never get stuck","Always be happy and successful in whatever you do,","And pray that you will find someone who loves you more than I do.")
    ]
  },
  {
    slug: "its-my-bad", cat: "wounds", title: "It's My Bad", kicker: "A love carried in silence",
    font: "hand", accent: "#7c72f0",
    img: { w: 1400, h: 1000, prompt: "A figure standing on shards of glass reflecting a beloved face, cool violet and steel-blue, bittersweet impossible love, painterly surrealism. No text." },
    stanzas: [
      S("After showing your reflection","A woman of near perfection","Some more words coming straight from my heart","Irony is sharing this will tear us apart"),
      S("Can't believe its happening","A beautiful feeling is on swing","BUT sadness emerges as does happiness","When the reality strikes like madness"),
      S("Don't know how it started","Never intended to be so ill fated","Heard \"Everything happens for a reason\"","Is it a true statement or a treason?"),
      S("Like listening your voice","In silence or in noise","Like watching you all day,","And Wish the day shall always stay"),
      S("Your naughty smile","Complements flick of your hair style","Your lovely and captivating eyes","I am certainly mesmerised"),
      S("What is this situation I am stuck in","Like on shards of glasses I am standing","Everyday, every minute I imagine your beautiful face","Brings peace to my soul and on character disgrace"),
      S("I know there is no chance we can be together","Can't destroy lives while being a love beggar","So I have to carry along with this facade","With my weeping heart charade"),
      S("I Don't expect mutual feeling","Even if there is it has no meaning","Pain I have to bear alone","Just reaping the seeds I have sown"),
      S("Sometimes I am scared","By mistake I don't say something I dare","Can't lose you or shatter our present equation","Happy at least to have this relation"),
      S("Accepting the fact with strife","Someone else has taken you this life","If rebirths are true","Then you shall be mine and won't let anyone take you"),
      S("Ending my lines but not love","always be loved and cared like a special dove","All I know is I like being with you","Habit my conscience having no clue")
    ]
  },
  {
    slug: "that-one-sided-love", cat: "wounds", title: "That One-Sided Love", kicker: "Waiting for God's answers to show",
    font: "hand", accent: "#8a7fff",
    img: { w: 1400, h: 1000, prompt: "One hand extended in hope toward another that is turned away, soft violet dusk, patient unrequited longing, delicate watercolour. No text." },
    stanzas: [
      S("I know you are also into me","Coz you don't want to forget me"),
      S("Listen to your heart which says","Love the one who loves u always"),
      S("If you are afraid to take a step ahead","Hold my hand, close your eyes and you are lead"),
      S("Just need your trust and love all my life","I Promise you will never repent or strife"),
      S("I know its against your time and will","I Might be late but not losing it still"),
      S("Hope and patience is all I have right now","I am waiting for God's answers to show"),
      S("I feel deeply hurt when there is someone else on your mind","I guess its not your fault but mine"),
      S("I really love you that nobody knows but me","Dont know whether you are in my destiny")
    ]
  },
  {
    slug: "the-disheartening-break-up", cat: "wounds", title: "The Disheartening Break-up", kicker: "Finally…",
    font: "bold", accent: "#6f6ae0",
    img: { w: 1400, h: 1000, prompt: "Two silhouettes walking apart on a rainy road at twilight, deep indigo and grey, quiet devastation and lingering hope, cinematic painterly. No text." },
    stanzas: [
      S("FINALLY....."),
      S("That time has come when everything's over","We parted ways, the decision which is sober"),
      S("Don't know how and when it ended this way","But my heart cries for you everyday"),
      S("I couldn't be fake with you anymore","Although I tried hard but that's all in my store"),
      S("There is something you took from me in this process","Sad to say but its my happiness"),
      S("For you its just the awkwardness of seeing me daily","For me it is the satisfaction my heart gets regularly"),
      S("I dream of you besides me always","In my arms or holding hands, until my dream breaks"),
      S("You think love is only when someone proves to you","I say that's not necessary if its true"),
      S("I knew I could take care of you whole my life","If you would have sworn to be my beloved wife"),
      S("I might be weak at expressing my true feelings","Pardon me, but never had the experience of such beautiful dealings"),
      S("Many people might have been after you for interest showed","But ask yourself have you met someone who loves you to let you go"),
      S("I was ready to accept you knowing all your past and present","All that mattered to me was you if you also consent"),
      S("I wish you never read my rhymes","These are not words but my emotions time to time"),
      S("I just hope you find someone best for you","Who can love you the way I do"),
      S("Who is to blame for such situations created,","Is it us or fated"),
      S("Your presence is bitter than your absence,","As I crave for your voice more than anything else"),
      S("The pretentious behaviour I carry everyday,","Helps me hide my emotions for happy stay"),
      S("The hope is somewhere still alive, i agree,","That one day you will accept me"),
      S("Destiny cannot disappoint me so many times,","I will be waiting when it shines,"),
      S("I promise to God, if given a chance I will take care of his beautiful child sent,","More than my life, that's my consent")
    ]
  },
  {
    slug: "regretful-sin", cat: "wounds", title: "Regretful Sin", kicker: "A scar that remains forever",
    font: "bold", accent: "#7c72f0",
    img: { w: 1400, h: 1000, prompt: "A broken heart mended with a scar of gold light, dark violet background, guilt turning to prayer, emotive symbolic illustration. No text." },
    stanzas: [
      S("i dont know from where to start","just feel disastrous in my heart","i just cant accept perfections in life","how bad i am i saw it in my eyes"),
      S("i broke the heart of an angel","just coz i didnt like her physical angle","a villainous heart of mine","brought the biggest scratch in someone's soul divine"),
      S("the purest form of love was coming my way","and i denied it like a stupid play","dont know wat else i need","my mind is getting mad in greed"),
      S("how can i apologize to you God","for commiting this crime to your child lord","in return punish me for what i did","i will accept it happily with all my heart and soul in it"),
      S("i know she must be deeply hurt","which i even cant imagine with my mind in dirt","she must be crying with priceless tears","and i dnt knw how my heart dat bears"),
      S("this is the biggest mistake of my life","giving someone my hand and pulling it away killing her feelings with a knife","leaves the scar just on ur hand and will repair","but d scar inside me remains forever"),
      S("please god hear my only request","give her all my luck and happiness","give her strenght and belief in love","please take care of her and protect her from this cruel world","Send for her the best person u ever created who loves her , be with her and make her smile unawaited")
    ]
  },
  {
    slug: "enough-is-enough", cat: "wounds", title: "Enough is Enough", kicker: "Oh God, please stop the time",
    font: "bold", accent: "#8a7fff",
    img: { w: 1400, h: 1000, prompt: "An hourglass with sand frozen mid-fall, two faded silhouettes inside, indigo and violet, plea against time, dramatic surreal illustration. No text." },
    stanzas: [
      S("we have said enough","we have thought enough","but still some words are left","Oh God pls stop the time as u making it tough"),
      S("we laughed enough","we cried enough","but still some smiles are left","Oh God pls stop the time as u making it tough"),
      S("we met enough","we seen enough","but still some wants are left","Oh God pls stop the time as u making it tough"),
      S("we waited enough","we complained enough","but still some frustrations are left","Oh God pls stop the time as u making it tough"),
      S("we expressed enough","we understood enough","but still some feelings are left","Oh God pls stop the time as u making it tough"),
      S("we decided enough","we planned enough","but still some missings are left","Oh God pls stop the time as u making it tough"),
      S("we listened to heart enough","we listened to mind enough","but still some love is left","Oh God pls stop the time as u making it tough")
    ]
  },
  {
    slug: "the-allahabad-town-girl", cat: "wounds", title: "The Allahabad Town Girl", kicker: "This is how I am feeling right now",
    font: "hand", accent: "#6f6ae0",
    img: { w: 1400, h: 1000, prompt: "A graceful small-town Indian woman walking as if wearing an invisible crown, warm dusk over old-town rooftops fading to violet, dignity and quiet longing, painterly. No text." },
    stanzas: [
      S("The girl from a simple Allahabad town","Walks like she wears a crown","Yet tied to her roots and culture somehow","This is how I am feeling right now"),
      S("Impressive with people of various kinds","Bonds you build without any bind","Innate quality you carry somehow","This is how I am feeling right now"),
      S("Always been a delight to watch you delighted","The lamp of happiness everywhere lighted","And all of sudden this source vanishes somehow","This is how I am feeling right now"),
      S("Please don't confuse my silence with ignorance","All I ever wanted is just your presence","That's also not in my destiny somehow","This is how I am feeling right now"),
      S("I might be difficult to understand","Unfavourable perception I usually get in hand","Hope you remember me for my good things somehow","This is how I am feeling right now"),
      S("All the things I said and done before","All I meant with my heart core","All of that deserved by you and only you somehow","This is how I am feeling right now"),
      S("I tried doing many things that flatters","Just to see that smile on your face that's what matters","Pardon me if sometimes I have failed somehow","This is how I am feeling right now"),
      S("You are that special chapter of my life which I won't let anyone read","I swear, I will remember you till I last breathe","No one but God knows this somehow","This is how I am feeling right now"),
      S("Your words are always on my mind","Like \"The best is yet to come and in all kinds\"","What if my best just came and going somehow","This is how I am feeling right now"),
      S("I, always have and always will","Wish the best for you for all your wishes fulfil","I just wish this is not our end of the road somehow","This is how I am feeling right now")
    ]
  },

  /* ---------------- KINDRED ---------------- */
  {
    slug: "my-dearest-sister", cat: "kindred", title: "My Dearest Sister", kicker: "Beauty with brain, my strongest one",
    font: "elegant", accent: "#e0a458",
    img: { w: 1400, h: 1000, prompt: "Warm portrait of a bright young woman full of confidence and innocence, golden amber light, pride and affection, hand-painted illustration. No text." },
    stanzas: [
      S("No matter where I am","No matter how I am","I always have and always will love this person","With whole heart and affection"),
      S("The cutest, the sweetest and the prettiest","Glad she is born in our nest","Shall never be harmed or unrest","Dear God! That's my small and only behest"),
      S("Beauty with brain","Imbibed in her without any stain","Innocence and smartness together","Like the words made only for her"),
      S("Filled with emotions,","Whether cries or laughs but with devotions","Hard work shall always be with you","No matter luck stays or flew"),
      S("Failures are necessary,","Winning then comes quite easy,","Accepting loss is first step for victory","Afterwards just keep going never worry"),
      S("Never compare you with other","They are not even inch even if they gather","In Life, always be confident and never stir","Accept challenges and fight vigour","AS YOU ARE MY STRONGEST and DEAREST SISTER")
    ]
  },
  {
    slug: "family", cat: "kindred", title: "Family", kicker: "Without it, there is no life",
    font: "modern", accent: "#d99a4e",
    img: { w: 1400, h: 1000, prompt: "A protective tree with many joined hands as branches sheltering a home, warm amber and gold, belonging and strength, elegant symbolic illustration. No text." },
    stanzas: [
      S("Family, is word for bonding","From which there is no absconding,","Built from materials love, care and affection,","If you don't believe then there is misconception"),
      S("What's in our future lies","Only a family sighs","Protection and strength that it offers","Only a fool can underestimate its powers"),
      S("Teachings and lessons are easy to get,","So retentive that you never forget","For it, millions of humans crave,","Not everyone is lucky to have"),
      S("One can just live and keep alive","But without it there is no life")
    ]
  },
  {
    slug: "happy-birthday-maa", cat: "kindred", title: "Happy Birthday, Maa", kicker: "That's the beauty of my mother",
    font: "elegant", accent: "#e0a458",
    img: { w: 1400, h: 1000, prompt: "Tender portrait of a loving mother, soft golden hour glow, warmth and gratitude, amber and rose, gentle hand-painted style. No text." },
    stanzas: [
      S("Taking care of others is not easy","Everyday becomes sleezy","Never complains even when it bother","That's the beauty of my mother"),
      S("Fights and quarrels","Comes in tiny pieces or in barrels","But she truly loves my father","That's the beauty of my mother"),
      S("Showers her hugs and kisses","Sleeps together but many times misses","Like a new born child she treats her daughter","That's the beauty of my mother"),
      S("Now it's the my turn","Always made her cry & after me run","But she loves me more than I do to her","That's the beauty of my mother"),
      S("It's only you who is always there","For anyone who needs love and care","The only manager of our family affair","We always love you & thank god for sending you here"),
      S("Wishing you a very Happy Birthday our sweet, heartwarming, sensitive, jolly and most loving Mother")
    ]
  },
  {
    slug: "friendship", cat: "kindred", title: "Friendship", kicker: "A sparkling star in everyone's eyes",
    font: "clean", accent: "#e6b45c",
    img: { w: 1400, h: 1000, prompt: "A lively young woman laughing among friends like a bright star, golden warm tones, joy and companionship, cheerful illustration. No text." },
    stanzas: [
      S("In this world of countless human","Met a girl you can't shun","Although it's difficult to find such one","But destiny always keeps you stunned"),
      S("She seems like an ordinary girl","Acts like a boy and that's the swirl","She talks like a wild","And acts like an innocent child"),
      S("Short and sweet","Born with such qualities that's a treat","Often naughty she is","Sparkling star in everyone's eyes"),
      S("Surrounded by friends","Can never be alone else God offends","Sadness never prevails for long","As friendships keeps her strong"),
      S("I like to meet people like you more","Because of whom happiness galore","Just don't let you change for anyone","Else you'll not find yourself and always run")
    ]
  },
  {
    slug: "friendship-in-unfriendly-world", cat: "kindred", title: "Friendship in an Unfriendly World", kicker: "A well-sent creature of God",
    font: "clean", accent: "#d99a4e",
    img: { w: 1400, h: 1000, prompt: "A single warm smiling face glowing amid a cold grey crowd, golden light against muted background, kindness in a harsh world, editorial illustration. No text." },
    stanzas: [
      S("Among the crazy crowd","Heard a voice so loud","Leaves such an impression","Can bring anyone out of depression"),
      S("The smile quite naughty but honest","That only she can manifest,","With whole heart she tries,","Whether laugh or cry."),
      S("You can't talk when she does,","But you can't resist listening her words","That's the attraction she carries,","You can stay with her without any worries."),
      S("A girl so jolly in nature,","A well sent God's creature,","Friendship she carries so perfect","After meeting her I can detect"),
      S("I have a request to Almighty,","The world needs humans like her more slightly","Who shall never be harmed or in mess,","And always spread happiness.")
    ]
  },
  {
    slug: "how-we-met", cat: "kindred", title: "How We Met, I Still Wonder", kicker: "Our friendship should shine like a star",
    font: "airy", accent: "#e6b45c",
    img: { w: 1400, h: 1000, prompt: "Two friends far apart under one shared shining star, warm amber night sky, fate and distance, gentle illustration. No text." },
    stanzas: [
      S("How we met I still wonder,","The fate after which I surrender","The two months just like that go","And we never interacted as we do now"),
      S("Although my eyes usually get attached to the beauty","But this one seemed out of reality","How perfectly created one can be","It's difficult to believe what I see"),
      S("It's not just the aesthetics I saw,","The heart and soul also had no flaw,","The girl who prays and believes in God","Shall never be victim of hatred or fraud"),
      S("As far as I know you","Simple and sensible are the words for you","Hard work shall always be inside you","And no force shall ever stop you"),
      S("The smile that has so much grace","Today, difficult to find or trace","Don't ever lose it just to warn","As life is swift from dusk to dawn"),
      S("I feel lucky to be your friend","I mean it and there's no pretend","Although we live so far","But our friendship should shine like a star")
    ]
  },
  {
    slug: "that-colleague-i-know", cat: "kindred", title: "That Colleague I Know", kicker: "The lioness that roars rarely",
    font: "modern", accent: "#d99a4e",
    img: { w: 1400, h: 1000, prompt: "A poised professional woman like a calm lioness in a modern office glow, warm gold and amber, quiet strength, refined illustration. No text." },
    stanzas: [
      S("Keeping the long story short","Glad to see you working in company of this sort","Going relentless and without any distort","\"And..\" driving yourself with everyone's love and Support"),
      S("Although I know a little about you","But enough to understand what you going through","Confidence and hard work are your strengths","\"And..\" who never turns back on employees, family or friends"),
      S("Sweet and jolly your journey so far","Exactly the personality you are","Wish you carry it all along","As life swifts from dusk to dawn"),
      S("The lioness that roars rarely","Trying to do all things fairly","Just remember the proud and happy moments as rest are momentarily","\"And..\" Wishing you a very Happy and Successful (and many more to come) Work Anniversary")
    ]
  },
  {
    slug: "atb-for-wedding", cat: "kindred", title: "A Blessing for the Wedding", kicker: "The knot that forever stays",
    font: "elegant", accent: "#e0a458",
    img: { w: 1400, h: 1000, prompt: "Two hands tying an eternal knot of light and marigold, warm gold and rose, blessing and union, elegant celebratory illustration. No text." },
    stanzas: [
      S("Hold each other arms always","Its the knot that forever stays","Support and trust each other in every phase","Love will be there in its own ways"),
      S("See the world in each other's eyes","Where time never runs with dials","If the woman is patient and man wise","Bad luck never touches and sorrow flies"),
      S("Blesses shall always be with you","Smiles never stops but grew","Unlike age, relation smells fresh and new","Bond that inspires and others look upto"),
      S("These are some thoughts I would like to share","When your new journey is beginning to glare","God is kind and always be there","Wish you all the best and all the happiness for your married life and future endeavour")
    ]
  },
  {
    slug: "birthday-of-someone-special", cat: "kindred", title: "Birthday of Someone Special", kicker: "Every petal says: You are beautiful",
    font: "romantic", accent: "#e6b45c",
    img: { w: 1400, h: 1000, prompt: "Roses bowing toward a radiant face, petals glowing, warm gold and rose-red, admiration and celebration, luminous illustration. No text." },
    stanzas: [
      S("today let the world know","these roses are feeling jealous and sorrow","when you are there","these roses are nothing compared"),
      S("the fragrance these roses were proud","all went away with a soundless sound","when you came near to them","they understood the real fragrance"),
      S("the freshness these roses used to spread","now they feel dull and dead","when you are present","the dead becomes alive in a moment"),
      S("the colour of these roses used to glow","now there is nothing for them to show","when they saw your face","all of them say \"my goodness grace\""),
      S("You may not beleive my words","this is the only truth my heart swore","Not just because i love you","But because every petal says that \"You Are Beautiful\""),
      S("Wishing you a very happy, exciting and full of love Birthday")
    ]
  },

  /* ---------------- REFLECTIONS ---------------- */
  {
    slug: "time-is-everything", cat: "reflections", title: "Time is Everything", kicker: "…and everything is Time",
    font: "modern", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A vast clock morphing into galaxies, buds, cities and faces along a spiral of time, teal and emerald, cosmic and philosophical, intricate illustration. No text." },
    stanzas: [
      S("From buds to flowers","From seconds to hours","Time is everything and everything is Time"),
      S("From black hole to galaxy","From prophecy to reality","Time is everything and everything is Time"),
      S("From apes to humans","From fire to nuclear inventions","Time is everything and everything is Time"),
      S("From trees to cities","From leaves to medicine companies","Time is everything and everything is Time"),
      S("From fiber to designer wear","From Anna to billionaire","Time is everything and everything is Time"),
      S("From bonds to social webs","From families to break ups","Time is everything and everything is Time"),
      S("From heart to cruelity","From humanity to insanity","Time is everything and everything is Time"),
      S("From actions to reactions","From unity to factions","Time is everything and everything is Time"),
      S("From independence to slaves of greed","From desire to need","Time is everything and everything is Time"),
      S("From our memories to dreams","From tears to smiles","Time is everything and everything is Time")
    ]
  },
  {
    slug: "a-quick-life-lesson", cat: "reflections", title: "A Quick Life Lesson", kicker: "Not the sun, but a destiny's quest",
    font: "clean", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A sunrise over mountains where the sun is a compass of destiny, teal and warm horizon, wisdom and journey, minimal elegant illustration. No text." },
    stanzas: [
      S("Rising in the east","falling in the west","not the sun","but a destiny's quest"),
      S("Finding the success","hiding your mess","Not human nature","but an uncalled mind's stress"),
      S("Growing a child","with decreasing life","Not a task","But a mother's pride"),
      S("Loving a person","Hating a person","Not an emotion","But a soul's devotion"),
      S("Expecting happiness","Ignoring sadness","Not a heart's request","But an inside hollowness"),
      S("Asking a dying human","for his last moments","Not an information","But a life's Inference")
    ]
  },
  {
    slug: "confusion-or-conscience", cat: "reflections", title: "Confusion or Conscience", kicker: "Who? — the must-ask question",
    font: "modern", accent: "#35b394",
    img: { w: 1400, h: 1000, prompt: "A face split between swirling confusion and calm starlight, teal and deep green, inner questioning, surreal painterly. No text." },
    stanzas: [
      S("Who is more confused","me or destiny","neither has control over the other","Like siblings from another mother"),
      S("Who is more sad","me or the surroundings","Hearts are broken everywhere","Some do and some dont care"),
      S("Who is more happy","me or the beautiful nature","both try to keep it constant","Surprisingly its getting vanished every instant"),
      S("Who is more loving","me or God","Cannot be measured but felt","Making receivers eyes melt"),
      S("Who is more angry","me or the hungry and slaughtered animals","Answer lies within","Time to start repenting for all our sins"),
      S("Who? is the must ask question","To wake up our conscience","Life is unpredictable or predicatble","Just stop thinking and let it be your own beautiful fable")
    ]
  },
  {
    slug: "remembering-last-things", cat: "reflections", title: "Remembering Last Things", kicker: "The last thing I believed",
    font: "airy", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A gentle collage of final images — a child's smile, a bird, a dog, pure nature — under fading serene light, teal and soft gold, tender mortality, painterly. No text." },
    stanzas: [
      S("The last thing I saw","was a child's smile raw","unaware of evil world","as Life takes swings and swirls"),
      S("The last thing I felt","was mother's eyes melt","never retires keeping others happy","taking all the hurting and snapping"),
      S("The last thing I thought","why god had me brought","still trying to find it out","conscience never losing and what my parent taught"),
      S("The last thing I know","was the nature being so pure","so calm and serene","hope it remains till I can see"),
      S("The last thing I touched","was a dog lying on a road","injured and crying in pain","no one listening as he was alone and vain."),
      S("The last thing I heard","was a melody from a bird","sound never disturbing","louder it is, more soothing"),
      S("The last thing I believed","love means unconditionally","between two living souls","among this diverse creature planet doles")
    ]
  },
  {
    slug: "just-like-that", cat: "reflections", title: "Just Like That", kicker: "On being lonely, away, together, human",
    font: "clean", accent: "#35b394",
    img: { w: 1400, h: 1000, prompt: "A rose blossoming from solitude into connection, teal-green gradient, contemplative growth, elegant minimal illustration. No text." },
    stanzas: [
      S("Being lonely isn't that bad,","Till one doesn't feel sad,","It helps to create or realize true emotions,","And do things with more devotions"),
      S("Being away isn't that fearful,","It might be temporary if not cheerful,","It brings loved ones more close,","Thereafter relations blossoms like a rose."),
      S("Being together can be dangerous,","Heart breaks are very tendentious","Identifying ones identity can be weary","For the people living within a boundary"),
      S("Being human is quite unpredictable,","Everyone has different mind and label,","Each one filled with own perception,","True for some and for others deception"),
      S("No human can be judged by other,","Its all the deeds that should bother,","He can be punished or awarded,","Don't forget its our creator who should be regarded.")
    ]
  },
  {
    slug: "meaningful-words", cat: "reflections", title: "Meaningful Words", kicker: "Perspective, Desire, Power, Empathy…",
    font: "modern", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "Words made of light floating like constellations — perspective, empathy, fate — teal and emerald, intellect and language, refined typographic-free abstract. No text." },
    stanzas: [
      S("\"Perspective\" - one word with many swings","plays a lead role in changing life's innings","selling is easy but buying is not","straying in complex minds a lot"),
      S("\"Desire\" - every human heart have this","some try hard and some accomplish","thin line to rename it as greed","but a very first step to succeed"),
      S("\"Power\"- strong when used wisely","weakest when used adversely","pushes you beyond your conscience","delicate to make or break your arrogance"),
      S("\"Empathy\" - not very popular among humans","a lost word with much needed connotation","ability to spread compassion and affection","more important than knowledge and education"),
      S("\"listening\" - not an easy skill","corporates depends on this and instills","relationships searching for it desperately","sadly hustle and bustle lifes fading it swiftly"),
      S("\"Fate\" - follows like an invisible shadow","you always try to see through an open window","manufactured by god and marketed by us","a true enemy of inner peace and happiness"),
      S("\"Emotions\" - dont have any key to start","have many branches from dull to spark","triggers display of varied reactions and actions","always handle with care,one and only suggestion")
    ]
  },
  {
    slug: "is-this-happiness", cat: "reflections", title: "Is This Happiness", kicker: "Slips out the more you want",
    font: "clean", accent: "#35b394",
    img: { w: 1400, h: 1000, prompt: "Many small glowing lanterns of happiness rising from everyday scenes, teal-green dusk, elusive joy, warm-cool illustration. No text." },
    stanzas: [
      S("An only emotion in over demand","slips out the more you want"),
      S("comes in life in different forms","like a gift god has bestowed upon"),
      S("some find it in santas parcel in morning","some celebrate the day they were born"),
      S("some get it in reaction to being funny","some feel it in passion and hobby"),
      S("some just smile as a way forward","some creates a way to smile onward"),
      S("some find it in soul mate","some in family and best mates"),
      S("some receive in being religious","some in worshiping their actions"),
      S("some enjoy their wealth","some in sharing what they are blessed with"),
      S("some find it in small things","some in making small things big"),
      S("Some realize it after overcoming pain","some rewarded for pain to triumph"),
      S("No exact words or feelings can define it","the positive effect it creates only drives it"),
      S("if we predict it will never touch our door","how we welcome makes its shelf life less or more")
    ]
  },
  {
    slug: "reality-check", cat: "reflections", title: "Reality Check", kicker: "Sometimes I am just…",
    font: "modern", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A free bird flying over a landscape shifting between wonder and worry, teal and gold, contrasting emotions, cinematic illustration. No text." },
    stanzas: [
      S("Sometimes I am just envy","to see a bird fly so free","With no rules or barriers","exploring places with blessed carriers"),
      S("Sometimes I am just stunned","to see the miracles happen","tiny brains inspiring the big ones","changing the future of nations"),
      S("Sometimes I am just worried","knowing distressful stories","Downs overpowering ups","Narrowing happiness in gallops"),
      S("Sometimes I am just miserable","trusting the deceitful","glad to experience the reality","surviving becoming insanity"),
      S("Sometimes I am just cheerful","to see hearts smile in full","racing ahead of sorrows","positive minds of lights not shadows")
    ]
  },
  {
    slug: "what-is-the-point", cat: "reflections", title: "What Is the Point!", kicker: "Think — else what is the point!",
    font: "bold", accent: "#35b394",
    img: { w: 1400, h: 1000, prompt: "A single question mark formed from tangled modern life — screens, money, faces — dissolving to reveal a soul of light, teal and slate, provocation and clarity. No text." },
    stanzas: [
      S("Humans getting success","With success losing humanity","What is the point!"),
      S("Creating memories in heart","Memories posted using technology","What is the point!"),
      S("Money buys food, cloths and shelter","Greed replaces money","What is the point!"),
      S("Our Soul is the only true identity","And we struggling for identity","What is the point!"),
      S("Emotions keeps us alive","And We live hiding emotions","What is the point!"),
      S("Spread love to seek peace","But Love is becoming subjective","What is the point!"),
      S("\"Think else what is the point!\"")
    ]
  },
  {
    slug: "hope", cat: "reflections", title: "Hope", kicker: "The one thing controlling human life",
    font: "airy", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A single ray of light breaking through dark clouds into countless eyes, teal and warm gold, resilient hope, luminous illustration. No text." },
    stanzas: [
      S("You see this in everyones eye","just dont know how deep it lies","Several emotions are dependent","\"Hope\" comes always intended"),
      S("The whole world is running on it","Businesses thrive and perishes","No age constraint it carries","\"Hope\" in the end all derives"),
      S("Many religions operate","fruitful for some and others detonates","Relationships flourish or breaks","\"Hope\" keeps everything on stake"),
      S("How and from where it comes","is it relative or just fear within us","Many Questions strike your mind","\"Hope\" is only controlling human life")
    ]
  },
  {
    slug: "dont-ever-settle", cat: "reflections", title: "Don't Ever Settle", kicker: "Defeats are always there to make you win",
    font: "bold", accent: "#35b394",
    img: { w: 1400, h: 1000, prompt: "A climber on four wheels of attitude ascending toward a bold horizon, teal and energetic gold, ambition and grit, dynamic illustration. No text." },
    stanzas: [
      S("just cherish what you got","The paradox confuses me a lot","Epitome of \"simplicity\" always misused","Yet no one can live without it","Dear Water, are you gonna end soon!"),
      S("My childhood went in understanding the race","My adolescence fighting it","\"I am not part of this\"..An epiphany struck a little late","I believe Desires are bigger than dreams","Real not reel","But Success only comes with Attitude on four wheels"),
      S("Fight,dont ever be scared","My parents' best lesson I pin","As Defeats are always there to make you win"),
      S("A Fun fact I came across","One can break your bones but not heart","As it's the strongest muscle in your body")
    ]
  },
  {
    slug: "life-meaning", cat: "reflections", title: "Life's Meaning", kicker: "Life is not a balance sheet",
    font: "clean", accent: "#3ec6a0",
    img: { w: 1400, h: 1000, prompt: "A heart balanced against coins on a scale, tipping toward love, teal and warm amber, values and existence, thoughtful illustration. No text." },
    stanzas: [
      S("shocked and disheartened","decision destiny had fastened","what have i done wrong i question","my heart's getting crippled in every situation"),
      S("what can i expect","in today society's neglect","when i try to earn respect","Everyone's intention is to suspect"),
      S("Love is only what i know","My heart is fast and mind always slow","people dont believe or i am not able to show","You ask for my life and i ll let it go"),
      S("For some money matters","For some career caters","For some prosperity glitters","Until we binded by love, all these shatters"),
      S("How can one make someone understand","Life is not a balance sheet or security stand","We all will die nothing in our hand","except family we built with support so grand"),
      S("The motive of our existence shuts","when reasonings in relationships are a must","Fighting challenges together with no shortcuts","Shall achieve happiness at full thrusts"),
      S("Oh dear God, just a humble request","I am getting tired with this quest","I can bear the pain of not building my nest","please dnt play with my heart as it needs rest","please dnt play with my heart as it needs rest")
    ]
  },

  /* ---------------- THE INNER SELF ---------------- */
  {
    slug: "me-and-my-life", cat: "self", title: "Me and My Life", kicker: "A crazy letter set",
    font: "modern", accent: "#7ea8ff",
    img: { w: 1400, h: 1000, prompt: "A vivid self-portrait collage of madness, love, food, sports and solitude woven into a single figure, blue and silver with sparks of warmth, autobiographical energy. No text." },
    stanzas: [
      S("Life, a crazy letter set","More u spend more u get","No dictionary can define it yet","means different to everyone in this big net"),
      S("All life stories are true","limitless movies can be built and construed","Some can be remembered and oders flew","Where once Critics( loved ones)always say \" PK hai tu\""),
      S("My story is also the \"One\"","Full of madness and emotions","Times to sadness, times to love, times to fun","And Rules often makes me feel like a fruit bun"),
      S("Never understood my existence","Now that research is kept at distance","my own shorter goals I append","Never got inspired never got influenced"),
      S("I Have a super apetite","For love and food delights","Always ready to give my share of bite","Spreading these unconditionally as my name also justifies"),
      S("Have limited people around","Trust everyone however bad it may sound","Consider myself alone but not lost or found","As Bond I create with myself never confound"),
      S("Horrific part comes now","this thing always scares me somehow","can neither stay nor run when i saw","the dirtiest and slimy living \"cockroaches\" are my only foe"),
      S("To irritate is my adventure","Like with a demon I venture","people often crash or surrender","\"Rocky\" victory of a \"karate kid\" commander"),
      S("my Helping hand given to the needy","No to NGOs i often find them greedy","human or animals irrespectively","I try to support whenever possibility"),
      S("Sports, education, work","gives pleasure and pain when life twerks","humans measure dese in success and failures","I enjoy the drive with jerks"),
      S("Responsibilities and Life hve biggest CAT fights","for me confidence is key to both the plights","build connect from mind to heart","u ll never feel the stop or the start"),
      S("Till date, This is my life","i live with strive","no regrets ever strike","keeping my heart young and mind always right")
    ]
  },
  {
    slug: "emotional-moments", cat: "self", title: "Emotional Moments", kicker: "I am losing me",
    font: "hand", accent: "#7c8cf0",
    img: { w: 1400, h: 1000, prompt: "A figure dissolving into fragments of words and shadow, cool blue and violet, quiet inner turmoil, expressive painterly. No text." },
    stanzas: [
      S("what to say","what not to say","noone listens the heart","only my words in others mind stay"),
      S("happy i always wanted to be","whether alone or with my would be","never knew happiness is not my cup of tea","which i always prepared for others and i drink whisky"),
      S("family i may not know how to run","may be i am a child or not a good son","may be its bad to show my love and care for everyone","without thinking much in any relation"),
      S("marriage journey i always wanted to enjoy","like a kid till grows old plays with toy","but i guess my happiness is immaterial to others","who says fun only for kids and not for elders"),
      S("never thought i will be afraid of myself","my unbiased feelings will be judged as hell","peace says i am so scared of you","whenever i come near your destiny wont let me to"),
      S("nothing in this world i believe is fair","my equal and true affection is taken as shared","people who i loved so much thinks i am weak","i say or dont say i am losing me")
    ]
  },
  {
    slug: "some-times", cat: "self", title: "Some Times", kicker: "Nothing is permanent",
    font: "airy", accent: "#7ea8ff",
    img: { w: 1400, h: 1000, prompt: "A figure suspended between many translucent moments of wish, regret and peace, blue and silver, impermanence, dreamlike double-exposure. No text." },
    stanzas: [
      S("Sometimes I wish","things didnt happen the way they happened"),
      S("sometims I feel","sadness overtaking my joy"),
      S("sometimes i imagine","living our life together"),
      S("sometimes I thank","God as things happens for good"),
      S("Sometimes I am lonely inside","trying to get myself back"),
      S("Sometimes I miss","the touch of someone to my soul"),
      S("sometimes I regret","my decisions in life"),
      S("sometimes I feel positive","accepting things as they are"),
      S("sometimes I find","Life is full of \"some times\" as nothing is permanent")
    ]
  },
  {
    slug: "life-struggle", cat: "self", title: "Life's Struggle", kicker: "Shall I give up or carry on my quest",
    font: "modern", accent: "#7c8cf0",
    img: { w: 1400, h: 1000, prompt: "A lone diver descending into deep steep water toward a distant light, blue and indigo, perseverance against depth, cinematic illustration. No text." },
    stanzas: [
      S("problems in life or life in problems","solutions always lies in bottoms","whenever i dive deep","the end is more steep"),
      S("frustrations and anger","always treats me banter","the more i try to be strong","unbreakable becomes their friendship bond"),
      S("Sometimes lonely i feel so","noone around but my soul","Hidden dreams behind my happiness","who is ready to understand this mess"),
      S("With the Enthusiast and confident mind","figuring out to put it on full wind","Destiny always takes me other way","where mind distorts and energy go waste"),
      S("Why my creation","i knw God did for some reason","So many years gone no answer yet","shall i give up or carry on my quest"),
      S("Nothing can satisfy human","only capablities shall conquer over emotions","But Talent and capabilities becoming myth","overshadowed by greed, fame, money, judgements filth")
    ]
  },
  {
    slug: "inside-me", cat: "self", title: "Inside Me", kicker: "They say… yet I…",
    font: "clean", accent: "#7ea8ff",
    img: { w: 1400, h: 1000, prompt: "A resilient figure carrying light within while grey voices swirl outside, blue and silver with a warm core, quiet defiance, expressive illustration. No text." },
    stanzas: [
      S("They say I am useless","Yet I try solving others problems","Nothing more nothing less"),
      S("They say i don't have emotions","Yet i keep making others smile","feeling happy with your expressions"),
      S("They say i don't work hard","Yet I am surviving and providing","Not sure why i cant say I am tired"),
      S("They say I am harsh","Yet i am very patient and listen","\"Please understand me\" calls my mind not heart"),
      S("They say i am not worth","I only know to keep going on","Till my last breath")
    ]
  },
  {
    slug: "after-a-while", cat: "self", title: "After a While", kicker: "My heart got a real smile",
    font: "airy", accent: "#7c8cf0",
    img: { w: 1400, h: 1000, prompt: "A faint genuine smile emerging from soft blue mist toward first light, blue and pale gold, hard-won contentment, gentle painterly. No text." },
    stanzas: [
      S("After a while,","My heart got a real smile,","Nobody can know the reason that's the catch","Stays as a remark that fills many scratch"),
      S("The time I invested to earn it","When I wasn't able to stand or sit","Serendipity brings the strongest effect","When fate starts to neglect"),
      S("I tried showing others path to happiness","To let people out of their mess","Getting one is the God's Bless","One forgets all regrets"),
      S("Still I am afraid,","Whether its for me or some")
    ]
  },

  /* ---------------- THE WORLD AROUND ---------------- */
  {
    slug: "coffee", cat: "world", title: "Coffee", kicker: "Would you like a cup?",
    font: "modern", accent: "#b07a4f",
    img: { w: 1400, h: 1000, prompt: "An artful cup of coffee with swirling steam forming faces and conversations, warm brown and cream, cosy and witty, editorial illustration. No text." },
    stanzas: [
      S("Coffee?"),
      S("An interesting drink with many strings","Attached tastes and feelings","A Concoction of intentions","Driving table conversations","A True partner in crime","Hobbying or professional times","A enemy of sleep","Drowns in addiction so deep","A creative facade","Draws a women's heart","A fling of energy","Fallen and trapped many","A global hero","Made by Mocha, Latte or Cappuccino"),
      S("And a question it often foresee","\"Would you like a Cup of Coffee?\"")
    ]
  },
  {
    slug: "morning-bells", cat: "world", title: "Morning Bells", kicker: "These vibes so serene",
    font: "airy", accent: "#5bb06f",
    img: { w: 1400, h: 1000, prompt: "A serene rain-washed April morning, dewdrops on green leaves, birds against a clear sky, fresh green and soft gold, calm and rebirth, luminous illustration. No text." },
    stanzas: [
      S("A morning so chilling","What an April to begin","Surprised by natures course","Mesmerising and raising the toast"),
      S("Tiny droplets swiped the dust","Left the earth like rebirth","Today my eyes opened with bliss","when birds giving clear sky a flying kiss"),
      S("A cup of tea in hand","Watching trees green and tall they stand","These Vibes so Serene","Hope for forever such beautiful mornings")
    ]
  },
  {
    slug: "story-of-a-weekend", cat: "world", title: "Story of a Weekend", kicker: "48 hours, many twists and turns",
    font: "clean", accent: "#8fb84a",
    img: { w: 1400, h: 1000, prompt: "A lively collage of weekend life — cafés, reels, sleep, malls, friends — swirling around the numbers of 48 hours, fresh green and warm sun, energetic editorial illustration. No text." },
    stanzas: [
      S("the story of weekend","not as easy to say","as it is for monday to friday"),
      S("different tale for each","as each weekend reach","48hrs to count","with many twists and turns around"),
      S("great thoughts are born","many erased","worth spending this time","even if you have nothing in line"),
      S("friends and families rejoiced","cafes and bars invoiced","some exciting plans are to sleep","while others decorated with reels"),
      S("some bonds and passions explored","and search for life's purpose detoured","workaholics competes with alcoholics","weekend is the only place for such frolics"),
      S("not to forget","OTT trend flying like a jet","window shopping is also catching up","Malls and Amazons are battling up"),
      S("a lot more happens","when a weekend strikens","some are yielding and some without meaning","but waiting for it is always delighting"),
      S("\"Weekend\" must be feeling","proud to have people's life going","time to talk, time to retrospect, time for emotions, time to find a way","time to stand from fall, time to help, time to rebuild your self to get ready for Monday")
    ]
  },
  {
    slug: "power-of-word-o-media", cat: "world", title: "The Power of Word-o-Media", kicker: "When words become weapons",
    font: "bold", accent: "#5bb06f",
    img: { w: 1400, h: 1000, prompt: "Faceless words swarming like a storm across glowing screens and crowds, green and slate, social-media commentary, striking editorial illustration. No text." },
    stanzas: [
      S("Thousands of thoughts shared across","Millions of people comments on tops"),
      S("War of words coming from years back","Platform they change with constant attack"),
      S("Desperate to be listened or heard","Creativity and innovations takes birth"),
      S("Value and sense amidst frosts","When words become weapons and peace lost"),
      S("These words have no face just name","Taking the drivers seat and rest is a game"),
      S("Some getting help and others money & fame","Words marrying perfectly with technology"),
      S("Great achievement defeating human trustability","Words used to be literally said and heard"),
      S("Gone are the days when few neighbours had get togethers","The new era fills life with so much fun and hysteria"),
      S("Cheers to the beginning of an end of social life with \"word-o-media\"")
    ]
  },
  {
    slug: "are-we-safe", cat: "world", title: "Are We Safe?", kicker: "Just dig deep inside you",
    font: "bold", accent: "#8fb84a",
    img: { w: 1400, h: 1000, prompt: "A fragile Earth cradled in uncertain hands amid headlines and shadows, green and dusk-grey, urgent social-conscience mood, powerful illustration. No text." },
    stanzas: [
      S("Are we Safe?","Just dig deep inside you","let your conscience find the truth"),
      S("With so much hullabaloo","Technology this technology that","it has really saved \"Who?\""),
      S("Our brave soldiers are more killed","not by enemy but political moves","now what pride shall they be filled"),
      S("Is global warming really a concern","when you scan first three pages of news","the self destructive humanity is easy to discern"),
      S("We are born in this era of religions, castes, greed & laws so flawed","We live believing things change with Time","Someone's wait is over, as the soul moves to heavenly abode"),
      S("Between all the happiness, sorrows and self sustain","between our lessons of being strong, fearless and healthy","I am going to ask again","\"Are We Safe!\"")
    ]
  },
  {
    slug: "free-or-captured", cat: "world", title: "Free or Captured", kicker: "The environment takes its revenge",
    font: "modern", accent: "#5bb06f",
    img: { w: 1400, h: 1000, prompt: "Nature reclaiming a still city — clear skies, returning birds, trees dancing — as humans watch from windows, vivid green and phoenix-orange sky, ecological awakening, cinematic illustration. No text." },
    stanzas: [
      S("Free or captured","by the \"environment\" stature","With the hatred it's causing upon us","A bright light of thought fall upon us"),
      S("In the times of we stuggling for life","The outside sun shines as a phoenix arrives","the dusty clouds throws red carpet for fresh air","Earth again happy to drape itself with protective layer"),
      S("The animals and birds laughing at us","some are happy some showing relief as sign","Karma they say is true for everyone","These humanals deserve the dungeon"),
      S("Trees we cut so miss them","Remaining now dancing with relatives","lust for advancements taking us back","Cure might hidden in trees we sacked"),
      S("What have we earned","its time to introspect in retrospect","Who has the more power, technology, money now","humans failed miserably and nature takes a bow"),
      S("Keep fighting for whose God it is","God has shown for who he/she is","Noone left today as human which he created","We Puppets of Sins getting toxicated"),
      S("Value of life lost in our minds","trying to seek in quotes,books, influncers and think we find","shame it takes end of lives to reach our answers","to live life fearlessly thats all mattered"),
      S("Moot question arrives","is this end of world or a warning strike","I say why ask what noone ever know","Environment taking revenge,Almighty's lesson it shows")
    ]
  }
];

// expose
window.SITE = { CATEGORIES, POEMS, FONTS };
