'use strict';
/* =============================================================
  أم حماصة وأبو حماصة — EDIT YOUR WEBSITE HERE
  You can change these values without editing the HTML or CSS.
  The password is decorative client-side access, NOT data security.
============================================================= */
const CONFIG = {
  girlfriendName: 'Karima',
  girlfriendNickname: 'ام حماصة',
  boyfriendNickname: 'ابو حماصة',
  bookTitle: 'ام حماصة وابو حماصة',
  subtitle: 'حكايتنا اللي ملهاش اخر',
  relationshipStartDate: '2023-11-22',
  password: '2211',
  music: { autoplay: true, src: 'assets/audio/our-song.mp3', sources: ['assets/audio/our-song.mp3','assets/audio/our-song.m4a','assets/audio/our-song.wav','assets/audio/our-song.ogg','assets/audio/song.mp3'], volume: 0.35, loop: true },
  animations: { enabled: true, pageFlipDuration: 1100, particlesEnabled: true },
  soundEffects: true
};

/* Each memory has its own photo file. You do NOT need to edit HTML. */
const MEMORIES = [
  {
    id: 1,
    title: 'من يوم ما جيتي يا كريمة ❤️',
    subtitle: 'The Beginning',
    image: 'assets/images/photo-01.jpg',
    caption: 'اول فصل في اجمل حكاية',
    date: '22.11.2023',
    quote: 'من أول يوم وانت بتخلي الدنيا أحلى في عيني',
    story: `يا كريمة يا حتة من قلبي

عارفة أكتر حاجة غريبة في حكايتنا إيه إن في يوم عادي جدا من أيام الدنيا ربنا جمعني بيكي ومن يومها اليوم العادي مبقاش عادي خالص. بقيت أصحى وأستنى أسمع صوتك وأبقى طول اليوم شايل حكايات صغيرة عشان أول ما أكلمك أحكيهالك. حتى لما مفيش حاجة تستاهل تتحكي كنت بلاقي نفسي عايز أقولك أي حاجة بس عشان أطول معاكي شوية.

فاكرة أول أيامنا لما كنا لسه بنكتشف بعض واحدة واحدة. كل كلام منك كان بيقربك لقلبي أكتر وكل ضحكة كانت بتسيب جوايا حاجة حلوة. كنت بفرح بأي رسالة منك وبضحك لوحدي زي العبيط وأقول لنفسي هو أنا مالي كده. وأهو طلع مالي إني وقعت في حبك يا بنتي ومكنتش واخد بالي.

يوم 22 نوفمبر 2023 مش مجرد تاريخ عندي. ده اليوم اللي ابتدت منه أحلى حكاية في عمري. ولو رجع بيا الوقت لأول مرة اتكلمنا فيها هحب أعيش كل ثانية تاني بنفس اللهفة وبنفس الدقة اللي قلبي دقها أول ما حس إن كريمة مش شبه أي حد.

بحب بدايتنا وبحب كل اللي جابنا لحد هنا والأهم إني بحبك انت يا أم حماصة يا أول وأحلى صفحة في كتابي.`
  },
  {
    id: 2,
    title: 'أقرب حد لقلبي',
    subtitle: 'My Favorite Person',
    image: 'assets/images/photo-02.jpg',
    caption: 'انتي التفاصيل اللي بحب احكيها',
    date: '',
    quote: 'أول حد عايز أحكيله وآخر صوت نفسي أسمعه',
    story: `يا أم حماصة تعرفي إن ساعات بيحصل موقف تافه جدا وأنا أول رد فعل عندي إني أمسك الموبايل وأقول لازم أحكي لكريمة. مش عارف إزاي بقيتي أول حد بفكر فيه لما أفرح وأول حد بوَحشه لما يومي يتعبني.

بحب لما نقعد نتكلم في أي حاجة ومن أي حاجة نفتح ألف موضوع. بحب لما تحكيلي يومك بتفاصيله حتى لو حاسة إنها حاجات صغيرة. بالنسبة لي مفيش حاجة صغيرة طالما تخصك. نفسي أعرف إيه اللي ضحكك وإيه اللي زعلك وإيه اللي خلاكي تبتسمي حتى لو ثانية.

وفي حاجات كتير نفسي أعملها معاكي مش لازم تكون حاجات كبيرة. نفسي في قعدة هادية وكوباية حاجة بنحبها وضحكة تطلع من قلبنا من غير ما نبص على الساعة. نفسي لما اليوم يبقى تقيل عليكي تفتكري إن في أبو حماصة هنا ممكن تسمعيه يقولك تعالى احكيلي يا روحي.

انت مش بس حبيبتي يا كريمة انت صاحبتي وأقرب حد لقلبي وأجمل حد بحب أشاركه حتى الحاجات اللي ملهاش لازمة. وأنا عارف إني برغي كتير بس معلش بقى انت اللي خليتي قلبي ياخد عليكي بالشكل ده.`
  },
  {
    id: 3,
    title: 'ضحكتك اللي بتطبطب عليا',
    subtitle: 'Your Beautiful Smile',
    image: 'assets/images/photo-03.jpg',
    caption: 'ضحكة واحدة منك تكفي',
    date: '',
    quote: 'يا رب ضحكتك الحلوة ما تفارق وشك يا قلبي',
    story: `أنا عندي اعتراف صغير يا كريمة. أنا ممكن أبقى متضايق من الدنيا كلها وأول ما أسمع ضحكتك ألاقي وشي ابتسم من غير ما أستأذنه. مش عارف انت بتعمليها إزاي بس ضحكتك دي فيها سحر خاص بيا أنا.

بحب ضحكتك اللي بجد لما تنسي كل اللي حواليكي وتضحكي براحتك. وبحب ضحكتك لما أقول إفيه بايخ وتبصيلي البصة اللي بتقول يا رب صبرني على أبو حماصة وبعدها تضحكي غصب عنك. ساعتها بحس إني عملت إنجاز عظيم يستحق الاحتفال والله.

بس تعرفي إيه اللي أهم عندي من ضحكتك إنك تكوني مرتاحة. لو في يوم مش قادرة تضحكي ولا تتكلمي ولا حتى تقولي مالك مش هطلب منك تتظاهري إنك كويسة. هفضل جنبك على قد ما أقدر وأسمعك ولو محتاجة هدوء هسيبلك مساحتك وأطمن عليكي بحنية.

نفسي عيونك تفضل شايفة حاجات حلوة كتير ونفسي قلبك يبقى خفيف ومطمن. ولو قدرت أكون سبب ولو صغير في ابتسامة على وشك يبقى أنا كده خدت أحلى هدية في الدنيا. اضحكي يا أم حماصة عشان أبو حماصة بيحب الضحكة وصاحبتها أكتر.`
  },
  {
    id: 4,
    title: 'انت أماني وراحتي',
    subtitle: 'My Safe Place',
    image: 'assets/images/photo-04.jpg',
    caption: 'الدنيا بتهدى لما تكوني هنا',
    date: '',
    quote: 'تعالي زي ما انت أنا هنا عشانك',
    story: `يا كريمة في أوقات الدنيا بتبقى زحمة أوي والواحد يبقى جواه كلام كتير ومش عارف يبدأ منين. في الأوقات دي كل اللي نفسي فيه إني أكلمك وأقولك أنا محتاج أسمع صوتك شوية. مش لازم تقولي حاجة مبهرة ولا تلاقي حل لكل اللي في دماغي. وجودك لوحده بيهون.

بحب الإحساس اللي بيجيلي وأنا معاكي. إني مش مضطر أفضل عامل فيها جامد وإن عادي أقولك أنا تعبان أو مضايق أو حتى مش فاهم أنا مالي. بحب إن في واحدة في الدنيا اسمها كريمة لما أفتكرها أحس إن الدنيا لسه فيها حاجات حنينة تستاهل.

وعايزك تعرفي إن نفس الكلام ليكي انت كمان. لما ترجعي من يوم طويل أو تبقي شايلة هم حاجة أو الدنيا مش ماشية معاكي زي ما تحبي مش لازم تكوني مبسوطة عشان تيجي تحكيلي. تعالي زي ما انت بكل اللي جواكي. لو عايزة تتكلمي أنا سامعك ولو عايزة تسكتي هفضل مطمن عليكي من غير زن.

يا أم حماصة أنا مش عايز أبقى بس الشخص اللي بتضحكي معاه. نفسي كمان أبقى الشخص اللي قلبك يحس معاه بالأمان. تلاقي معاه حضن في الكلام وحنية حتى من بعيد. وأهو ده بالنسبالي معنى الراحة اللي بحسها معاكي.`
  },
  {
    id: 5,
    title: 'تفاصيلنا اللي بحبها',
    subtitle: 'Our Little Moments',
    image: 'assets/images/photo-05.jpg',
    caption: 'الضحك اللي محدش فاهمه غيرنا',
    date: '',
    quote: 'أم حماصة وأبو حماصة حكاية محدش يفهمها غيرنا',
    story: `عارفة يا أم حماصة أنا بحب الحاجات الصغيرة اللي بينا أوي. بحب أسماءنا الغريبة اللي لو حد سمعها هيقف يسأل إحنا مالنا. بحب الهزار اللي بنفهمه من كلمة واحدة وبحب الرسايل اللي بتيجي فجأة وسط اليوم فتخليني أبتسم وأنا أصلا مشغول.

ساعات بحس إن لينا دنيا صغيرة لوحدنا محدش فاهم تفاصيلها غيرنا. فيها ضحك على حاجات ملهاش أي منطق وفيها كلام بنقوله لبعض من غير مقدمات وفيها لحظات عادية جدا بس بالنسبة لي أغلى من ألف مناسبة.

تخيلي إن ممكن بعد سنين نفتكر كلمة كنا بنقولها ونقعد نضحك بنفس الطريقة. أو نشوف صورة قديمة ونفتكر اليوم كان ماشي إزاي وإيه اللي حصل قبلها وبعدها. الحاجات دي يمكن ناس كتير تشوفها بسيطة بس هي اللي بتخليني أحس إن لينا حكاية تخصنا إحنا الاتنين.

وعلى فكرة لو في مسابقة لألطف اسمين في الدنيا فأم حماصة وأبو حماصة هيكسبوا من غير منافسة. ده رأيي وأنا محايد تماما طبعا. ربنا يديم ضحكتنا يا كريمة ويفضل عندنا دايما كلام صغير يفرح القلب الكبير اللي بينا.`
  },
  {
    id: 6,
    title: 'حتى الأيام الصعبة عديناها سوا',
    subtitle: 'Through Everything',
    image: 'assets/images/photo-06.jpg',
    caption: 'نتعلم ونقرب ونفهم بعض اكتر',
    date: '',
    quote: 'مهما نتلخبط نرجع نتكلم بحنية',
    story: `يا حبيبتي أنا عارف إن مش كل أيامنا كانت سهلة ومش كل مرة عرفنا نقول اللي جوانا بالطريقة الصح. في أيام الكلام اتلخبط فيها وفي لحظات كل واحد فينا كان محتاج التاني يفهمه أكتر. بس عمري ما حبيت فكرة إننا ننسى كل الحلو عشان لحظة صعبة.

أنا ساعات برجع أفكر في حاجات كنت ممكن أقولها بهدوء أكتر أو أسمعك فيها للآخر من غير ما أستعجل الرد. ومش بقولك الكلام ده عشان أعمل وعود كبيرة. أنا بقوله عشان انت غالية عليا ولأني عايز أبقى أحن عليكي وعلى اللي بينا.

نفسي كل ما حاجة تضايقنا نفتكر إننا مش واقفين قصاد بعض. إحنا في نفس الناحية. نعرف نعتذر لما نغلط ونسمع لما التاني يتكلم ونطمن بعض حتى لو الدنيا بايظة شوية. مش لازم نبقى كاملين يا كريمة. كفاية نبقى صادقين وبنحاول من قلبنا.

وأنا بحبك في الأيام اللطيفة وفي الأيام اللي محتاجة صبر. بحبك وانت بتضحكي وبحبك وانت محتاجة حد يقولك أنا معاكي يا روحي. ولو في حاجة أتمنى تفضل ثابتة مهما عدت أيام فهي إننا نفضل نختار الحنية على أي حاجة تانية.`
  },
  {
    id: 7,
    title: 'يا ريت تشوفي نفسك بعيني',
    subtitle: 'If You Could See Yourself',
    image: 'assets/images/photo-07.jpg',
    caption: 'كل الحاجات اللي بحبها فيكي',
    date: '',
    quote: 'انت جميلة في كل حالاتك يا كريمة',
    story: `نفسي مرة أشوفك بتبصي لنفسك بعيني أنا يا كريمة. مش عشان أقولك كلام وخلاص لكن عشان انت ساعات يمكن مش واخدة بالك قد إيه وجودك حلو وقد إيه فيكي تفاصيل بتخليني أحبك كل يوم زيادة.

بحب طريقتك لما تتحمسي لحاجة وتفضلي تحكي عنها. بحب قلبك لما يحن على اللي حواليه. بحب ضحكتك ونبرة صوتك ولما تبقي مركزة في حاجة مهمة بالنسبة ليكي. وبحب كمان ملامحك الهادية بعد يوم طويل حتى لو انت شايفة إنك مرهقة ومش في أحسن شكل. أنا شايف كريمة اللي بحبها وبس.

عايزك لما تكوني مضغوطة أو شاكّة في نفسك تفتكري إنك مش مطالبة تثبتي لأي حد إنك تستاهلي الحب. انت غالية زي ما انت. بخوفك وفرحتك وطموحك ولخبطة أيامك وكل حاجة بتخليكي انت.

ولو جه يوم ونسيتي انت جميلة قد إيه تعالى لأبو حماصة. هقعد أفكرك لحد ما تقولي بس بقى كفاية كلام. وساعتها هقولك حاضر وأسكت خمس دقايق وأرجع أكمل. عشان أنا فعلا فخور بيكي وبحبك من كل قلبي يا أم حماصة.`
  },
  {
    id: 8,
    title: 'بختارك كل يوم يا حبيبتي',
    subtitle: 'My Everyday Choice',
    image: 'assets/images/photo-08.jpg',
    caption: 'مش بس في الايام المميزة',
    date: '',
    quote: 'بحبك في الأيام العادية قبل الأيام المميزة',
    story: `بصي يا كريمة أنا مش عايز أقولك كلام كبير أوي عن العمر كله وأنسى أوريكي حبي في اليوم العادي. أنا عايز أبقى موجود في التفاصيل. أطمن عليكي وسط زحمة يومك وأسمعك لما تحكيلي وأفرحلك من قلبي لما تعملي حاجة كنت بتتمنيها.

عايز في الأيام اللي الدنيا تكون لطيفة نقعد نهزر ونضحك ونستمتع بيها. وفي الأيام اللي تكون تقيلة نعرف نهون على بعض بكلمة حلوة وسؤال بصدق. عايزنا نفضل بنشجع بعض على أحلامنا من غير ما واحد يضيع نفسه عشان التاني.

وأكتر حاجة بحبها في فكرة بكرة إن فيه تفاصيل كتير لسه متعاشتش. صور لسه متصورتش وضحك لسه متضحكش وكلام لسه متقالش. مش لازم أعرف كل حاجة هتحصل عشان أفرح بفكرة إننا ممكن نعيش حكايات جديدة سوا.

لو سألتيني ليه بختارك هقولك عشان انت كريمة. مش محتاج سبب أذكى من كده. بحب وجودك وقربك وروحك وطريقتك الخاصة اللي بتخليني أقول كل يوم يا بخت أبو حماصة بأم حماصة.`
  },
  {
    id: 9,
    title: 'صورنا اللي جوا قلبي',
    subtitle: 'A Thousand Memories',
    image: 'assets/images/photo-09.jpg',
    caption: 'كل صورة وراها شعور',
    date: '',
    quote: 'كل صورة ليكي عندي وراها ألف إحساس',
    story: `كل صورة في الكتاب ده عندي وراها إحساس مش بس شكل. حتى لو احنا واقفين فيها عادي أو بنضحك من غير سبب أنا لما أبصلها بفتكر إن كان فيه يوم كامل حوالين اللحظة دي وكلام ومشاعر وتفاصيل محدش يعرفها غيرنا.

ساعات بفتح صورة قديمة وأفضل باصص عليها شوية. مش عشان الصورة مثالية ولا الإضاءة حلوة. بس عشان فيها انت. فيها نسخة مننا من وقت معين وذكرى حلوة خلت قلبي يبتسم. وبحس إن أجمل حاجة في الصور إننا لما نرجعلها بعد فترة نلاقي نفس الدفا لسه موجود.

نفسي نعمل ذكريات تانية كتير. حاجات بسيطة زي مشوار نفضل فاكرينه وقعدة نضحك فيها لحد ما نتعب أو حتى يوم عادي نقف في آخره نقول كان حلو عشان كنا سوا. ونفسي كمان منبقاش مشغولين بتصوير كل لحظة لدرجة إننا ننسى نعيشها.

الصور العشرة دول مجرد شوية شبابيك صغيرة على الحكاية الكبيرة اللي بينا. وأنا كل ما أشوفهم هفتكر إن من أحلى النعم اللي دخلت حياتي إن اسمك بقى في ذكرياتي يا كريمة. يا رب دايما أفتكرك وأبتسم.`
  },
  {
    id: 10,
    title: 'وإنت لسه أحلى الحكاية',
    subtitle: 'Always You',
    image: 'assets/images/photo-10.jpg',
    caption: 'ولسه في صفحات جاية',
    date: '',
    quote: 'الكتاب خلص بس الكلام الحلو ليكي ما بيخلصش',
    story: `وصلنا لآخر صورة يا أم حماصة بس أنا لسه عندي كلام يكفي كتب تانية والله. كل ما أقول هخلص الرسالة ألاقي حاجة جديدة عايز أقولهالك. هو ده ذنبي أنا يعني إن ربنا رزقني بواحدة حبيتها بالشكل ده.

أنا مش شايفك فصل وعدى ولا ذكرى حلوة وبس. انت الشخص اللي لما أسمع اسمه قلبي يهدى ولما أشوف ضحكته يومي ينور. انت صاحبتي وحبيبتي والبنت اللي نفسي أشوفها فرحانة ومطمنة ومحققة كل اللي بتتمناه.

مش هقولك إن الدنيا طول الوقت هتبقى وردي. بس هقولك إن نفسي دايما نعرف نخلي لبعض ركن دافي وسط كل اللي بيحصل. نهزر ونطمن ونفهم ونعتذر ونحاول نبقى أحسن. وأنا من قلبي نفسي أفضل سبب راحة ليكي زي ما انت بقيتي سبب راحة ليا.

وقبل ما تقفلي الكتاب عايزك تعرفي حاجة واحدة. كل صفحة اتكتبت هنا عشان تفتكري إنك محبوبة مش في يوم مميز بس ولا في مناسبة بس. محبوبة في يومك العادي وانت بتعملي أي حاجة ومحـبوبة حتى لما الدنيا تتقل عليكي.

بس استني متقفليش دلوقتي. أبو حماصة مستخبي ليكي في آخر الكتاب بجواب صغير... صغير في الشكل بس والله كبير أوي في قلبي.`
  }
];

const DEDICATION = `يا كريمة يا حبيبتي ويا أحلى أم حماصة في الدنيا

الكتاب ده عملته ليكي عشان كان نفسي أديكي حاجة تقدري تفتحيها في أي وقت وتسمعي فيها صوت قلبي وهو بيكلمك حتى لو أنا مش جنبك.

في كل صفحة حطيت حتة من حبي ليكي وشوية من الكلام اللي ساعات بيبقى جوايا ومبعرفش أقوله كله مرة واحدة. حبيت كل صورة تبقى جنبها رسالة تطبطب عليكي وتفكرك إن في حد شايفك أغلى حاجة في يومه.

خدي راحتك واقلبي الصفحات واحدة واحدة وابتسمي لما تفتكري حكاياتنا. ولو لقيتي أبو حماصة بيتكلم كتير متستغربيش أصله لما بييجي الكلام عنك مش بيعرف يسكت.

يلا يا قلب أبو حماصة نفتح أول صفحة سوا. بحبك أوي ❤️`;

/* Feel free to edit the full letter below. */
const FINAL_LETTER = `يا كريمة يا حبيبتي ويا قلب أبو حماصة

مش عارف أبدأ الجواب ده منين. يمكن عشان كل مرة أفتكر فيها حاجة بحبها فيكي ألاقي نفسي عايز أقولك عشر حاجات تانية. بس هبدأ بأبسط حاجة وأصدق حاجة عندي. أنا بحبك يا كريمة. بحبك حب دافي كده يخلي الواحد نفسه يطمن على اللي بيحبه كل شوية حتى لو مش عارف يقول السبب.

عارفة في حاجة بتحصل معايا كتير. أبقى في نص يومي وسط مية حاجة وفجأة ييجي اسمك في دماغي من غير مقدمات. أفتكر ضحكتك أو طريقة كلامك أو كلمة منك فضلت معايا. ألاقي نفسي بابتسم وأقول يا رب خليها مبسوطة ومطمنة دايما. يمكن انت متعرفيش قد إيه مجرد وجودك في حياتي مخليني أحس إن أيامي فيها نور أكتر.

أكتر حاجة بحبها فينا إننا مش لازم نعمل حاجة كبيرة عشان نبقى مبسوطين. ممكن كلمة منك تخلي يومي كله يهون. وممكن نقعد نهزر في كلام محدش غيرنا هيفهمه ونتحول لأم حماصة وأبو حماصة وكأن الدنيا كلها سابتنا في عالم صغير معمول مخصوص لينا. العالم ده من أغلى الحاجات عندي والله.

وبحبك في التفاصيل اللي يمكن انت نفسك مش واخدة بالك منها. في صوتك لما تكوني فرحانة. وفي حماسك لما تحكيلي عن حاجة نفسك تعمليها. وفي طريقتك وانت بتحاولي حتى لو يومك طويل ومتعب. وفي سكاتك كمان لما تكوني محتاجة راحة. مش مطلوب منك تضحكي طول الوقت ولا تبقي قوية طول الوقت. أنا بحب كريمة الحقيقية بكل اللي فيها.

وعايز أقولك حاجة مهمة أوي. لو في يوم حسيت إنك مرهقة أو إن الدنيا تقيلة عليكي افتكري إنك مش لازم تشيلي كل ده لوحدك. أنا نفسي أبقى حد تطمني له. تحكيلي لو عايزة تحكي وتسندي قلبك شوية لو محتاجة. مش هقدر أصلح كل حاجة في الدنيا ولا هقولك إني عمري ما هغلط. بس أقدر أحاول أسمعك بجد وأحافظ على الكلام الحلو والحنية اللي بينا.

ويمكن إحنا كمان عدينا بأيام اتضايقنا فيها من بعض أو اتفهمنا غلط. أنا مش ناسي ده ومش عايز أتصرف كأنه محصلش. كل اللي نفسي فيه إننا لما نزعل نفضل فاكرين قد إيه إحنا غاليين على بعض. نتكلم براحة ونعتذر لما نغلط ونتعلم نكون أحن. أنا مش عايز أكسب خناقة وأخسرك. أنا عايز أفضل قريب منك وفاهمك ومطمنك.

يا كريمة أنا فخور بيكي وبكل خطوة بتاخديها حتى في الأيام اللي انت شايفة إنك عملتي فيها قليل. بحب طموحك وبحب إن عندك أحلام تخصك ونفسي أشوفك بتوصليلها واحدة واحدة. وعايزك تعرفي إن حبك عندي مش إنك تفضلي حواليا طول الوقت. حبك إنك تكوني سعيدة ومرتاحة وعارفة إن في حد بيشجعك من قلبه.

عارفة نفسي في إيه. نفسي في حاجات بسيطة أوي. أقعد معاكي من غير ما أبص على الساعة. أسمعك بتحكيلي عن يومك. أضحك معاكي لحد ما دموعنا تنزل. نشوف صورنا بعد سنين ونفتكر إحنا كنا بنضحك على إيه. ولما الدنيا تتقل علينا نفضل عارفين نرجع لبعض بالكلام الطيب والنية الحلوة.

ولو سألتيني ليه عملتلك الكتاب ده هقولك عشان كنت نفسي يبقى عندك مكان صغير كل ما تدخليه تحسي إن أبو حماصة بيقولك أنا واخد بالي منك. انت مش شخص عادي في حياتي. انت حبيبتي وصاحبتي وأجمل صدفة بقت أحلى اختيار في عمري. وكل صورة هنا هي محاولة صغيرة إني أحط اللي جوا قلبي قدام عينيكي.

وفي وسط كل الهزار بين أم حماصة وأبو حماصة عايز أقولك حاجة بجد. أنا ممتن لكل يوم عرفتك فيه. ومبسوط إن في حد في الدنيا لما أقوله وحشتيني بيبقى قصدي فعلا إني نفسي أبقى قريب منه. ونفسي دايما تفضلي حاسة إنك متحابة ومقدرة ومش لوحدك.

خدي من الجواب ده حضن كبير من بعيد. حضن فيه طبطبة على كل يوم تعبك وضحكة على كل حاجة ضايقتك وكلمة بحبك أقولها مهما قلتها قبل كده.

وبين أول صفحة وآخر صفحة وفي كل يوم جاي عندي نفس الكلام

أنا بحبك يا كريمة

بحبك يا أم حماصة يا حبيبة قلبي

ومن أبو حماصة ليكي إنت وبس ❤️`;

/* ─────────────────────────────────────────────────────────────
  Application, page-flip choreography and offline-safe playback.
───────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);
const elements = {
  entrance: $('entrance'), entranceParticles: $('entranceParticles'), passwordDialog: $('passwordDialog'),
  passwordForm: $('passwordForm'), passwordInput: $('passwordInput'), passwordError: $('passwordError'),
  bookView: $('bookView'), letterView: $('letterView'), universeView: $('universeView'),
  book: $('openBook'), left: $('leftPage'), right: $('rightPage'), sheet: $('flipSheet'),
  prev: $('prevButton'), next: $('nextButton'), progress: $('progressBar'),
  progressFill: $('progressFill'), label: $('chapterLabel'), dots: $('chapterDots'),
  musicDock: $('musicDock'), audio: $('backgroundMusic'), play: $('musicPlayButton'),
  mute: $('musicMuteButton'), volume: $('musicVolume'), letter: $('loveLetter'),
  envelopeStage: $('envelopeStage'), toast: $('toast')
};

const STORAGE_KEY = 'hamasa-love-book-v1';
const SESSION_KEY = 'hamasa-book-unlocked-v1';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let state = { index: 0, phase: 'entrance', flipping: false, letterOpened: false, musicWanted: true, volume: CONFIG.music.volume, muted: false };
let toastTimeout = null;
let counterInterval = null;
let audioFadeAnimation = 0;
let letterOpenTimeout = null;
let audioMissing = false;
let audioLoadWarningShown = false;
let currentMusicSourceIndex = 0;
let letterTransitioning = false;
let unlockPending = false;
let audioContext = null;
let finishFlip = null;

function safeLoad(key, fromSession = false) {
  try { return (fromSession ? sessionStorage : localStorage).getItem(key); }
  catch { return null; }
}
function safeSave(key, value, toSession = false) {
  try { (toSession ? sessionStorage : localStorage).setItem(key, value); }
  catch { /* localStorage may be disabled by privacy settings. */ }
}
function loadPreferences() {
  try {
    const saved = JSON.parse(safeLoad(STORAGE_KEY) || '{}');
    state.index = Number.isInteger(saved.index) ? Math.min(10, Math.max(0, saved.index)) : 0;
    state.letterOpened = !!saved.letterOpened;
    state.volume = Number.isFinite(saved.volume) && saved.volume>0.08 ? Math.min(1,saved.volume) : CONFIG.music.volume;
    state.muted = false;
    // Start a fresh visit with music enabled, even if it was paused during a previous visit.
    state.musicWanted = CONFIG.music.autoplay !== false;
  } catch { /* We keep the defaults if data was corrupted. */ }
}
function saveProgress() {
  safeSave(STORAGE_KEY, JSON.stringify({
    index: state.index, letterOpened: state.letterOpened,
    volume: state.volume, muted: state.muted, musicWanted: state.musicWanted
  }));
}
function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
}
function paragraphs(text, extraLastClass = '') {
  const sections = String(text).split(/\n\s*\n/).filter(Boolean);
  return sections.map((section,i) => `<p${i === sections.length - 1 && extraLastClass ? ` class="${extraLastClass}"` : ''}>${escapeHTML(section.trim()).replace(/\n/g,'<br>')}</p>`).join('');
}
function notify(message) {
  clearTimeout(toastTimeout);
  elements.toast.textContent = message;
  elements.toast.classList.add('visible');
  toastTimeout = setTimeout(() => elements.toast.classList.remove('visible'), 3300);
}
function scrollToTop() { window.scrollTo({ top:0, behavior:prefersReducedMotion.matches ? 'instant' : 'smooth' }); }
function populateParticles() {
  if (!CONFIG.animations.particlesEnabled) return;
  let seed = 2831;
  const random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 4294967296);
  const build = (parent, number, className) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < number; i++) {
      const dot = document.createElement('i');
      dot.className = className + (i % 19 === 0 && className === 'star' ? ' large' : '');
      dot.style.setProperty('--x', (random()*100).toFixed(2)+'%');
      dot.style.setProperty('--y', (random()*100).toFixed(2)+'%');
      dot.style.setProperty('--s', (random()*2.5+.7).toFixed(1)+'px');
      dot.style.setProperty('--o', (random()*.55+.15).toFixed(2));
      dot.style.setProperty('--d', (random()*3+3).toFixed(1)+'s');
      fragment.appendChild(dot);
    }
    parent.appendChild(fragment);
  };
  build(elements.entranceParticles, 38, 'particle');
  build($('universeStars'), 110, 'star');
  const heart = $('cosmicHeart');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 72; i++) {
    const t = i * Math.PI * 2 / 72;
    const x = 16 * Math.pow(Math.sin(t), 3) * 4.5;
    const y = -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*4.5;
    const dot = document.createElement('i');
    dot.className = 'heart-star';
    dot.style.setProperty('--sx', ((random()-.5)*460).toFixed(1)+'px');
    dot.style.setProperty('--sy', ((random()-.5)*450).toFixed(1)+'px');
    dot.style.setProperty('--tx', x.toFixed(1)+'px');
    dot.style.setProperty('--ty', y.toFixed(1)+'px');
    dot.style.transitionDelay = (i % 13 * 25)+'ms';
    fragment.append(dot);
  }
  heart.append(fragment);
}

/* Tiny synthesized interaction sound. No external file or network needed. */
function softChime(frequency = 660) {
  if (!CONFIG.soundEffects) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    if (!audioContext) audioContext = new Ctx();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(200,frequency*.76),now+.38);
    gain.gain.setValueAtTime(.0001,now);
    gain.gain.exponentialRampToValueAtTime(.026,now+.035);
    gain.gain.exponentialRampToValueAtTime(.0001,now+.45);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now); oscillator.stop(now+.47);
  } catch { /* Audio effects are optional. */ }
}

function openPasswordDialog() {
  if (elements.passwordDialog.open) return;
  elements.passwordError.textContent = '';
  elements.passwordInput.value = '';
  elements.passwordDialog.showModal();
  elements.passwordInput.focus();
}
function closePasswordDialog() { if (elements.passwordDialog.open) elements.passwordDialog.close(); }
function unlock() {
  if (unlockPending) return;
  unlockPending = true;
  closePasswordDialog();
  softChime(830);
  safeSave(SESSION_KEY,'yes',true);
  elements.entrance.classList.add('unlocking');
  prepareAudio();
  if (CONFIG.music.autoplay && state.musicWanted && elements.audio.paused) playAudio(true);
  const duration = prefersReducedMotion.matches ? 0 : 1150;
  setTimeout(() => {
    elements.entrance.hidden = true;
    elements.entrance.classList.remove('unlocking');
    elements.musicDock.hidden = false;
    showBook(state.index);
    unlockPending = false;
  },duration);
}

/* ────── Book pages / photo placeholders ────── */
function leftMarkup(index) {
  const footer = `<div class="page-footer"><span>${index === 0 ? 'M ♡ K' : 'OUR LITTLE FOREVER'}</span><span class="page-heart">♡</span><span>${String(index*2 || 1).padStart(2,'0')}</span></div>`;
  if (!index) {
    return `<div class="page-inner"><div class="dedication-art"><div class="dedication-wreath" aria-hidden="true">♡</div><p class="edition">Our Little Forever</p><p class="edition-date">22 · 11 · 2023</p></div>${footer}<button type="button" class="page-corner-button" data-navigate="previous" aria-label="الصفحة السابقة"></button></div>`;
  }
  const chapter = MEMORIES[index-1];
  return `<div class="page-inner"><div class="photo-page"><div class="photo-kicker">A MOMENT TO KEEP FOREVER · ${String(index).padStart(2,'0')}</div>
    <div class="photo-slot"><figure class="photo-frame"><div class="photo-fallback"><div class="photo-fallback-inner"><span>♡</span><strong>Our Memory ${String(index).padStart(2,'0')}</strong><small>مكان صورتنا الحلوة رقم ${index}<br>photo-${String(index).padStart(2,'0')}.jpg</small></div></div><img class="memory-photo" src="${escapeHTML(chapter.image)}" alt="ذكرى ${index} من صور كريمة وابو حماصة" loading="${Math.abs(index-state.index)<=1?'eager':'lazy'}" decoding="async"></figure></div>
    <figcaption class="photo-caption"><span>${escapeHTML(chapter.caption)}</span><span>${escapeHTML(chapter.date || '♡ forever')}</span></figcaption></div>${footer}
    <button type="button" class="page-corner-button" data-navigate="previous" aria-label="الصفحة السابقة"></button></div>`;
}
function rightMarkup(index) {
  if (!index) {
    return `<div class="page-inner text-page dedication-copy"><span class="chapter-number">TO THE ONE I LOVE</span><div class="chapter-ornament">✧ ♡ ✧</div><h3>إلى أم حماصة ❤️</h3><div class="chapter-english">Before Our Story Begins</div><div class="story-scroll" dir="rtl">${paragraphs(DEDICATION)}</div><button type="button" data-navigate="next" class="button button--primary">يلا نبدأ حكايتنا ♡</button><div class="page-footer story-page-footer"><span>HANDMADE WITH LOVE</span><span class="page-heart">✧</span><span>02</span></div><button type="button" class="page-corner-button" data-navigate="next" aria-label="الصفحة القادمة"></button></div>`;
  }
  const chapter = MEMORIES[index-1];
  return `<div class="page-inner text-page"><span class="chapter-number">CHAPTER ${String(index).padStart(2,'0')} / 10</span><button type="button" class="chapter-ornament chapter-heart-button" data-egg="heart" title="رسالة ليكي" aria-label="قلب فيه رسالة مستخبية">✧ ♡ ✧</button><h3>${escapeHTML(chapter.title)}</h3><div class="chapter-english">${escapeHTML(chapter.subtitle)}</div><div class="story-scroll" dir="rtl">${paragraphs(chapter.story)}<blockquote class="chapter-quote">${escapeHTML(chapter.quote)}</blockquote></div><div class="page-footer story-page-footer"><span>M ♡ K</span><span class="page-heart">♡</span><span>${String(index*2+2).padStart(2,'0')}</span></div><button type="button" class="page-corner-button" data-navigate="next" aria-label="الصفحة القادمة"></button></div>`;
}
/* Resize the white photo mat to the actual picture, not to the paper sheet.
   The picture always uses the maximum available space without cropping. */
let activePhotoObserver = null;
function fitPhotoFrame(img) {
  if (!img.naturalWidth || !img.naturalHeight || !img.isConnected) return;
  const frame=img.closest('.photo-frame');
  const slot=img.closest('.photo-slot');
  if (!frame || !slot || !slot.clientWidth || !slot.clientHeight) return;
  const pad=parseFloat(getComputedStyle(frame).paddingLeft)||10;
  const availableW=Math.max(32,slot.clientWidth-8-2*pad-2);
  const availableH=Math.max(32,slot.clientHeight-8-2*pad-2);
  const scale=Math.min(availableW/img.naturalWidth,availableH/img.naturalHeight);
  frame.style.setProperty('--fitted-frame-width',`${Math.floor(img.naturalWidth*scale+2*pad+2)}px`);
  frame.style.setProperty('--fitted-frame-height',`${Math.floor(img.naturalHeight*scale+2*pad+2)}px`);
}
function fixImageFallback(scope) {
  if (scope===elements.left && activePhotoObserver) {
    activePhotoObserver.disconnect(); activePhotoObserver=null;
  }
  scope.querySelectorAll('img.memory-photo').forEach(img => {
    const frame = img.closest('.photo-frame');
    const slot = img.closest('.photo-slot');
    const fallback = frame.querySelector('.photo-fallback');
    const onFailure = () => { img.hidden=true; fallback.style.display='grid'; frame.classList.remove('has-real-photo'); };
    const onSuccess = () => {
      img.hidden=false; fallback.style.display='none';
      frame.classList.add('has-real-photo');
      fitPhotoFrame(img);
      // When the page is initially hidden during unlocking, measure again
      // after it becomes visible and whenever the layout changes.
      requestAnimationFrame(() => fitPhotoFrame(img));
      if(scope===elements.left && 'ResizeObserver' in window && slot) {
        if(activePhotoObserver) activePhotoObserver.disconnect();
        activePhotoObserver=new ResizeObserver(() => fitPhotoFrame(img));
        activePhotoObserver.observe(slot);
      }
    };
    img.addEventListener('error',onFailure,{once:true});
    img.addEventListener('load',onSuccess,{once:true});
    if (img.complete) {if(img.naturalWidth>0) onSuccess(); else onFailure();}
  });
}
window.addEventListener('resize',()=>{
  const img=elements.left.querySelector('img.memory-photo:not([hidden])');
  if(img) fitPhotoFrame(img);
});
function renderSpread(index) {
  elements.left.innerHTML = leftMarkup(index);
  elements.right.innerHTML = rightMarkup(index);
  fixImageFallback(elements.left);
  updateProgress();
  const scrollBox = elements.right.querySelector('.story-scroll');
  if (scrollBox) scrollBox.scrollTop = 0;
}
function updateProgress() {
  const index = state.index;
  $('chapterEyebrow').textContent = index ? `OUR CHAPTER ${String(index).padStart(2,'0')}` : 'AN OPEN LETTER TO YOU';
  $('sceneTitle').textContent = index ? MEMORIES[index-1].title : 'حكايتنا اللي ملهاش آخر';
  $('sceneSubline').textContent = index ? MEMORIES[index-1].subtitle : 'كل صفحة هنا شايلة حتة مني ليكي';
  elements.label.textContent = index ? `Chapter ${String(index).padStart(2,'0')} / 10` : 'Dedication · 00 / 10';
  elements.progressFill.style.width = `${index*10}%`;
  elements.progress.setAttribute('aria-valuenow',String(index));
  elements.prev.disabled = index === 0;
  elements.next.disabled = false; // Re-enable after each completed page turn.
  elements.next.innerHTML = index === 10 ? 'الجواب الأخير <span aria-hidden="true">♡</span>' : 'الصفحة الجاية <span aria-hidden="true">←</span>';
  elements.dots.querySelectorAll('button').forEach((dot,i) => {
    if(i === index) dot.setAttribute('aria-current','step');
    else dot.removeAttribute('aria-current');
  });
}
function showOnly(phase) {
  state.phase = phase;
  elements.entrance.hidden = phase !== 'entrance';
  elements.bookView.hidden = phase !== 'book';
  elements.letterView.hidden = phase !== 'letter';
  elements.universeView.hidden = phase !== 'universe';
  elements.musicDock.hidden = phase === 'entrance';
  if (phase !== 'universe') stopCounter();
  if(document.activeElement instanceof HTMLElement) document.activeElement.blur();
  scrollToTop();
}
function showBook(index = state.index) {
  if(finishFlip) finishFlip();
  state.index = Math.min(10,Math.max(0,index));
  saveProgress();
  renderSpread(state.index);
  showOnly('book');
  requestAnimationFrame(()=>{const img=elements.left.querySelector('img.memory-photo:not([hidden])');if(img)fitPhotoFrame(img);});
  fadeMusicTo(state.muted ? 0 : state.volume,420);
}
function setIndex(index) {
  state.index = Math.min(10,Math.max(0,index));
  saveProgress();
  renderSpread(state.index);
  if (window.innerWidth <= 760) {
    elements.book.classList.remove('mobile-changing');
    void elements.book.offsetWidth;
    elements.book.classList.add('mobile-changing');
  }
  if (window.innerWidth <= 760) {
    const top = elements.bookView.querySelector('.book-headline').getBoundingClientRect().top + window.scrollY - 18;
    window.scrollTo({top,behavior:prefersReducedMotion.matches?'instant':'smooth'});
  }
  preloadNeighborImages();
}
function buildFlipFace(inner, which) {
  const face = document.createElement('div');
  face.className = `sheet-face sheet-face--${which}`;
  face.innerHTML = inner;
  return face;
}
function navigate(direction) {
  if(state.phase !== 'book' || state.flipping) return;
  const oldIndex = state.index;
  if (direction > 0 && oldIndex === 10) { enterLetter(); return; }
  if (direction < 0 && oldIndex === 0) return;
  const nextIndex = oldIndex + direction;
  if (window.innerWidth <= 760 || prefersReducedMotion.matches || !CONFIG.animations.enabled) {
    setIndex(nextIndex);
    return;
  }
  state.flipping = true;
  elements.prev.disabled = true; elements.next.disabled = true;
  const oldLeft = elements.left.innerHTML;
  const oldRight = elements.right.innerHTML;
  elements.sheet.className = `flip-sheet active ${direction > 0 ? 'next' : 'previous'}`;
  elements.sheet.innerHTML = '';
  if (direction > 0) {
    elements.sheet.append(buildFlipFace(oldRight,'front'),buildFlipFace(leftMarkup(nextIndex),'back'));
    elements.right.innerHTML = rightMarkup(nextIndex);
    // Old left photo remains visible until the new photo turns over it.
  } else {
    elements.sheet.append(buildFlipFace(oldLeft,'front'),buildFlipFace(rightMarkup(nextIndex),'back'));
    elements.left.innerHTML = leftMarkup(nextIndex);
    fixImageFallback(elements.left);
  }
  fixImageFallback(elements.sheet);
  // Swap visibility at the midpoint, avoiding mirrored writing even on browsers
  // that flatten the 3D layers.
  const faceSwapTimer = setTimeout(() => {
    if (state.flipping) elements.sheet.classList.add('past-half');
  }, CONFIG.animations.pageFlipDuration * 0.5);
  // The two requestAnimationFrames let the initial transform commit first.
  requestAnimationFrame(() => requestAnimationFrame(() => elements.sheet.classList.add('turning')));
  const finish = () => {
    if (!state.flipping) return;
    clearTimeout(fallback);
    elements.sheet.removeEventListener('transitionend',onFlipEnd);
    clearTimeout(faceSwapTimer);
    finishFlip = null;
    state.flipping = false;
    elements.sheet.className = 'flip-sheet';
    elements.sheet.innerHTML = '';
    setIndex(nextIndex);
  };
  const onFlipEnd = (e) => {
    if(e.propertyName === 'transform' && e.target === elements.sheet) finish();
  };
  let fallback;
  // Keep the callback available if someone jumps chapters during a flip.
  finishFlip = finish;
  fallback = setTimeout(finish,CONFIG.animations.pageFlipDuration + 150);
  elements.sheet.addEventListener('transitionend',onFlipEnd);
}
function preloadNeighborImages() {
  for (const id of [state.index+1,state.index+2]) {
    if(id < 1 || id > MEMORIES.length) continue;
    const img = new Image(); img.src = MEMORIES[id-1].image;
  }
}
function buildDots() {
  const fragment = document.createDocumentFragment();
  for(let i=0;i<=10;i++) {
    const dot = document.createElement('button');
    dot.type='button'; dot.className='chapter-dot';
    dot.title=i?`فصل ${i}`:'الاهداء';
    dot.setAttribute('aria-label',i?`انتقلي للفصل ${i}`:'صفحة الاهداء');
    dot.addEventListener('click',()=> {
      if(state.phase!=='book') return;
      if(finishFlip) finishFlip();
      setIndex(i);
    });
    fragment.append(dot);
  }
  elements.dots.append(fragment);
}

/* ────── Letter: envelope open and close ────── */
function enterLetter() {
  if(state.flipping || letterTransitioning) return;
  showOnly('letter');
  closeLetter(false);
  fadeMusicTo(state.muted ? 0 : state.volume*.52,900);
}
function revealLetter() {
  if(letterTransitioning) return;
  letterTransitioning=true;
  elements.envelopeStage.classList.add('is-open');
  softChime(520);
  clearTimeout(letterOpenTimeout);
  letterOpenTimeout=setTimeout(()=>{
    $('envelopeStage').hidden=true;
    elements.letter.hidden=false;
    elements.letter.focus({preventScroll:true});
    state.letterOpened=true;saveProgress();
    letterTransitioning=false;
    scrollToTop();
  },prefersReducedMotion.matches?0:1180);
}
function closeLetter(animate = true) {
  clearTimeout(letterOpenTimeout);
  letterTransitioning=false;
  elements.letter.hidden=true;
  $('envelopeStage').hidden=false;
  elements.envelopeStage.classList.remove('is-open');
  if(animate) scrollToTop();
}

/* ────── Universe: motion + a real calendar duration counter ────── */
function daysInMonth(year,monthZeroBased) {return new Date(year,monthZeroBased+1,0).getDate();}
function addMonthsClamped(date, months) {
  const year = date.getFullYear(),month=date.getMonth();
  const targetFirst = new Date(year,month+months,1,date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds());
  targetFirst.setDate(Math.min(date.getDate(),daysInMonth(targetFirst.getFullYear(),targetFirst.getMonth())));
  return targetFirst;
}
function elapsedCalendarTime(start,now) {
  if (now.getTime() < start.getTime()) return {years:0,months:0,days:0,hours:0,minutes:0,seconds:0};
  let years = now.getFullYear()-start.getFullYear();
  if(addMonthsClamped(start,years*12)>now) years--;
  let anchor = addMonthsClamped(start,years*12);
  let months=0;
  while (months<12 && addMonthsClamped(start,years*12+months+1)<=now) months++;
  anchor=addMonthsClamped(start,years*12+months);
  let days=0;
  // Advance calendar days (not 24-hour chunks), accommodating local DST changes.
  while (days<32) {
    const next = new Date(anchor.getFullYear(),anchor.getMonth(),anchor.getDate()+1,anchor.getHours(),anchor.getMinutes(),anchor.getSeconds(),anchor.getMilliseconds());
    if(next>now) break;
    anchor=next;days++;
  }
  let remaining=Math.max(0,now.getTime()-anchor.getTime());
  const hours=Math.floor(remaining/3600000); remaining%=3600000;
  const minutes=Math.floor(remaining/60000); remaining%=60000;
  const seconds=Math.floor(remaining/1000);
  return {years,months,days,hours,minutes,seconds};
}
function updateCounter() {
  const [year,month,day] = CONFIG.relationshipStartDate.split('-').map(Number);
  const date = new Date(year,month-1,day,0,0,0);
  const duration = elapsedCalendarTime(date,new Date());
  for (const part of ['Years','Months','Days','Hours','Minutes','Seconds']) {
    $(`count${part}`).textContent=String(duration[part.toLowerCase()]).padStart(2,'0');
  }
}
function stopCounter(){if(counterInterval){clearInterval(counterInterval);counterInterval=null;}}
function enterUniverse() {
  closeLetter(false);
  showOnly('universe');
  elements.universeView.classList.remove('formed');
  requestAnimationFrame(()=>requestAnimationFrame(()=>elements.universeView.classList.add('formed')));
  updateCounter();stopCounter();counterInterval=setInterval(updateCounter,1000);
  fadeMusicTo(state.muted ? 0 : state.volume,1400);
  softChime(720);
}

function musicSources() { return Array.isArray(CONFIG.music.sources) && CONFIG.music.sources.length ? CONFIG.music.sources : [CONFIG.music.src]; }
function setAudioSource(index = 0) {
  const sources = musicSources();
  currentMusicSourceIndex = Math.max(0, Math.min(index, sources.length - 1));
  const chosen = sources[currentMusicSourceIndex];
  if (elements.audio.getAttribute('src') !== chosen) {
    elements.audio.src = chosen;
    elements.audio.load();
  }
  return chosen;
}
function setMusicStatus(message) {
  const label = $('musicStatus');
  if (label) label.textContent = message;
  elements.musicDock.classList.toggle('audio-error', !!audioMissing);
}
/* ────── Persistent background soundtrack ────── */
function prepareAudio() {
  setAudioSource(currentMusicSourceIndex);
  elements.audio.loop=!!CONFIG.music.loop;
  elements.audio.volume=state.muted?0:state.volume;
  elements.audio.muted=state.muted;
  elements.audio.preload='metadata';
  elements.volume.value=String(state.volume);
  updateAudioUI();
}
function updateAudioUI(){
  const playing=!elements.audio.paused&&!audioMissing;
  elements.musicDock.classList.toggle('playing',playing);
  elements.play.textContent=playing?'❚❚':'▶';
  elements.play.setAttribute('aria-label',playing?'ايقاف الاغنية':'تشغيل الاغنية');
  elements.mute.textContent=state.muted?'×':'♪';
  elements.mute.setAttribute('aria-label',state.muted?'الغاء كتم الصوت':'كتم الصوت');
  if (audioMissing) setMusicStatus('ملف الأغنية مش موجود');
  else if (playing) setMusicStatus(state.muted ? 'الصوت مكتوم' : 'الأغنية شغالة ♫');
  else setMusicStatus('اضغطي تشغيل ♡');
}
async function playAudio(autoplayAttempt = false) {
  if (!elements.audio.getAttribute('src')) prepareAudio();
  if (audioMissing) {
    if (!autoplayAttempt) notify('ملف الأغنية مش موجود. ضيف our-song.mp3 داخل assets/audio عشان يشتغل ♡');
    updateAudioUI(); return;
  }
  try {
    await elements.audio.play();
    audioMissing = false; state.musicWanted = true;
    updateAudioUI(); saveProgress();
  } catch (error) {
    // NotAllowedError = browser autoplay policy. Other failures are reported via
    // the audio error event, which tries other bundled formats.
    if (!autoplayAttempt && error && error.name === 'NotAllowedError')
      notify('المتصفح محتاج أول لمسة منك عشان يشغّل الصوت ♡');
    else if (!autoplayAttempt && audioMissing)
      notify('الأغنية مش موجودة أو مش قابلة للتشغيل. اتأكد من ملف assets/audio/our-song.mp3 ♡');
    updateAudioUI();
  }
}
function fadeMusicTo(target,duration=550) {
  cancelAnimationFrame(audioFadeAnimation);
  if(elements.audio.muted || state.muted){elements.audio.volume=0;return;}
  target=Math.max(0,Math.min(1,target));
  const from=elements.audio.volume;
  if(prefersReducedMotion.matches || duration<=0){elements.audio.volume=target;return;}
  const start=performance.now();
  const tick=now=>{
    const t=Math.min(1,(now-start)/duration);const eased=t*t*(3-2*t);
    elements.audio.volume=from+(target-from)*eased;
    if(t<1)audioFadeAnimation=requestAnimationFrame(tick);
  };
  audioFadeAnimation=requestAnimationFrame(tick);
}

/* Browsers often block audible autoplay until a real tap/click/key press.
   Try on page entry, then try again directly inside the very first user gesture.
   This works on the cover, without needing a separate music button or password. */
function resumeMusicOnInteraction(event) {
  if (!CONFIG.music.autoplay || !state.musicWanted || audioMissing || !elements.audio.paused) return;
  if (event.type === 'keydown' && (event.repeat || ['Shift','Control','Alt','Meta'].includes(event.key))) return;
  if (event.target instanceof Element && event.target.closest('#musicDock')) return;
  playAudio(true);
}

/* ────── Global interactive events ────── */
function attachEvents() {
  // Capture the earliest gesture even before the book is unlocked.
  document.addEventListener('pointerdown',resumeMusicOnInteraction,{capture:true,passive:true});
  document.addEventListener('touchend',resumeMusicOnInteraction,{capture:true,passive:true});
  document.addEventListener('click',resumeMusicOnInteraction,true);
  document.addEventListener('keydown',resumeMusicOnInteraction,true);
  $('lockButton').addEventListener('click',openPasswordDialog);
  $('closePasswordDialog').addEventListener('click',closePasswordDialog);
  $('coverEasterEgg').addEventListener('click',()=>notify('ابو حماصة بيحبك اكتر ما تتخيلي ❤️'));
  $('togglePassword').addEventListener('click',()=>{
    const toggle=$('togglePassword');const shown=elements.passwordInput.type==='text';
    elements.passwordInput.type=shown?'password':'text';
    toggle.setAttribute('aria-pressed',String(!shown));
    toggle.setAttribute('aria-label',shown?'إظهار كلمة السر':'إخفاء كلمة السر');
  });
  elements.passwordForm.addEventListener('submit',e=>{
    e.preventDefault();
    if(elements.passwordInput.value.trim()===CONFIG.password){unlock();return;}
    const replies=['يا ام حماصة هو انت نسيتي سرنا ولا ايه 😂❤️','حاولي تاني يا قلب ابو حماصة','لا لا كده ابو حماصة هيزعل منك 😂'];
    elements.passwordError.textContent=replies[Math.floor(Math.random()*replies.length)];
    elements.passwordForm.classList.remove('shake');
    void elements.passwordForm.offsetWidth;
    elements.passwordForm.classList.add('shake');
    elements.passwordInput.focus();
  });
  elements.prev.addEventListener('click',()=>navigate(-1));
  elements.next.addEventListener('click',()=>navigate(1));
  elements.book.addEventListener('click',e=>{
    const nav=e.target.closest('[data-navigate]');
    if(nav){navigate(nav.dataset.navigate==='next'?1:-1);return;}
    if(e.target.closest('[data-egg]')) notify('يا بخت ابو حماصة بيكي 😂❤️');
  });
  $('restartButton').addEventListener('click',()=>showBook(0));
  $('fullscreenButton').addEventListener('click',()=>{
    if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{});return;}
    document.documentElement.requestFullscreen?.().catch(()=>notify('المتصفح مش سامح بملء الشاشة هنا'));
  });
  document.addEventListener('keydown',e=>{
    if(state.phase!=='book'||elements.passwordDialog.open) return;
    const target=e.target;
    if(target instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(target.tagName))return;
    if(e.key==='ArrowLeft'){e.preventDefault();navigate(1);}
    if(e.key==='ArrowRight'){e.preventDefault();navigate(-1);}
  });
  let touchStart=null;
  elements.book.addEventListener('touchstart',e=>{if(e.touches.length===1)touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  elements.book.addEventListener('touchend',e=>{
    if(!touchStart||e.changedTouches.length!==1)return;
    const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;
    if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.4)navigate(dx<0?1:-1);
    touchStart=null;
  },{passive:true});
  $('envelopeButton').addEventListener('click',revealLetter);
  $('closeLetterButton').addEventListener('click',()=>closeLetter());
  $('readAgainButton').addEventListener('click',()=>elements.letter.scrollIntoView({behavior:prefersReducedMotion.matches?'instant':'smooth',block:'start'}));
  $('surpriseButton').addEventListener('click',enterUniverse);
  $('backToBookButton').addEventListener('click',()=>showBook(10));
  $('replayButton').addEventListener('click',()=>showBook(0));
  $('starEasterEgg').addEventListener('click',()=>notify('انت احلى صدفة حصلتلي ✨'));
  elements.play.addEventListener('click',()=>{
    if(!elements.audio.paused){elements.audio.pause();state.musicWanted=false;saveProgress();}
    else {
      if (state.muted || state.volume < 0.02) {
        state.muted = false;
        state.volume = Math.max(state.volume,CONFIG.music.volume);
        elements.audio.muted = false;
        elements.audio.volume = state.volume;
        elements.volume.value = String(state.volume);
      }
      state.musicWanted = true;
      playAudio();
    }
    updateAudioUI();
  });
  elements.mute.addEventListener('click',()=>{
    state.muted=!state.muted;elements.audio.muted=state.muted;
    fadeMusicTo(state.muted?0:state.phase==='letter'?state.volume*.52:state.volume,200);
    updateAudioUI();saveProgress();
  });
  elements.volume.addEventListener('input',()=>{
    state.volume=Number(elements.volume.value);
    if(state.volume>0&&state.muted){state.muted=false;elements.audio.muted=false;}
    fadeMusicTo(state.phase==='letter'?state.volume*.52:state.volume,100);
    updateAudioUI();saveProgress();
  });
  elements.audio.addEventListener('play',updateAudioUI);
  elements.audio.addEventListener('pause',updateAudioUI);
  elements.audio.addEventListener('error',()=>{
    const sources = musicSources();
    if (currentMusicSourceIndex < sources.length - 1) {
      currentMusicSourceIndex += 1;
      setAudioSource(currentMusicSourceIndex);
      if (state.musicWanted) playAudio(true);
      return;
    }
    audioMissing = true;
    // Show an error while keeping the book fully functional.
    updateAudioUI();
    if (!audioLoadWarningShown && state.phase !== 'entrance') {
      audioLoadWarningShown = true;
      notify('مش لاقي الأغنية. ضيف our-song.mp3 داخل assets/audio ♡');
    }
  });
  elements.audio.addEventListener('loadedmetadata',()=>{
    audioMissing=false;
    updateAudioUI();
  });
}
function init() {
  loadPreferences();
  populateParticles();
  buildDots();
  $('letterContent').innerHTML=paragraphs(FINAL_LETTER,'final-words');
  attachEvents();
  prepareAudio();
  if(safeLoad(SESSION_KEY,true)==='yes') {
    showBook(state.index);
  } else {
    showOnly('entrance');
  }
  // Attempt immediately. If sound is blocked by the browser, the first
  // interaction anywhere on the site will retry with user activation.
  if (CONFIG.music.autoplay && state.musicWanted) playAudio(true);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
