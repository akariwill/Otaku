const mangaInfo = [
  // [1]
  {
    title: `Circles`,
    authors: `Shrinell`,
    demographic: `Manhwa`,
    published: `2021`,
    status: `Completed`,
    genres: `Drama, Mature, Romance`,
    description: `“You are just my type!” Jeon Jae-woo joins P&M, a theater and film club after twists and turns. But what? The beauties of the club actively attack Jeon Jae-woo! Will Jaewoo really be able to survive the offensive of the girls and win her own love?`,
    valumes: 1,
  },
  // [2]
    {
    title: `Bunk Beds`,
    authors: `Haron`,
    demographic: `Manhwa`,
    published: `2022`,
    status: `Completed`,
    genres: `Drama, Romance, School life`,
    description: `Seungbin who finally got into the prestigious university, lives with a mysterious roommate. The next day, he attempts to greet his roommate in anticipation…
The person lying on the bed is a woman?! His bland college life has started to get more exciting!`,
    valumes: 1,
  },
    // [3]
    {
    title: `Keep This a Secret From Mom`,
    authors: `NOAH`,
    demographic: `Manhwa`,
    published: `2021`,
    status: `Completed`,
    genres: `Mature, Romance, School life`,
    description: `Hae-Seong is staying at his mom’s friend’s house whose name is Yeona. He thought it would be enough study well at school but the top students are good at love too. “The classroom wasn’t only for studying…?!`,
    valumes: 1,
  },
    // [4]
    {
    title: `Solo Leveling`,
    authors: `Chu gong`,
    demographic: `Manhwa`,
    published: `2018`,
    status: `Completed`,
    genres: `Action, Adventure, Fantasy`,
    description: `In a world where hunters, human warriors who possess magical abilities, must battle deadly monsters to protect mankind from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival.`,
    valumes: 1,
  },
    // [5]
    {
    title: `Sensei Wa Koi o Oshie Rarenai`,
    authors: `Motomi Minamoto`,
    demographic: `Manga`,
    published: `2018`,
    status: `Completed`,
    genres: `Comedy, Romance, School life`,
    description: `A lazy student and a straight-laced teacher. At first glance, they seem like they are on bad terms, but things get different after class.`,
    valumes: 1,
  },
    // [6]
    {
    title: `Fuufu Ijou Koibito Miman`,
    authors: `Kanamaru`,
    demographic: `Manga`,
    published: `2018`,
    status: `Ongoing`,
    genres: `Romance, School life`,
    description: `Jirou, a third-year in high school, is forced to live with a gal named Akari under a course called the "Couple Practical." In order to be paired with their own romantic interests, they're going to act as a married couple...!?`,
    valumes: 1,
  },
    // [7]
    {
    title: `Bad Thinking Diary`,
    authors: `Park Do han`,
    demographic: `Manhwa`,
    published: `2022`,
    status: `Completed`,
    genres: `Mature, Romance, Yuri`,
    description: `Minji and Yuna have been best friends since high school, and Minji counts herself lucky to have someone so pretty and kind in her life. She just knows that when she finally starts dating, she wants it to be with someone as amazing as Yuna! Everything seems perfect, but things start to change when Minji begins having dirty dreams… ones starring Yuna herself! Minji chalks it up to her own loneliness, but for some reason Yuna starts acting strangely when Minji tells her about it… Is she upset, or could it be that Yuna has harbored feelings for Minji all along? From unrequited love, excitement, and obsession, just where will these bad thoughts lead them?`,
    valumes: 1,
  },
    // [8]
    {
    title: `Shouxing Laogong Ye Ye Liao`,
    authors: `Chudao`,
    demographic: `Manhua`,
    published: `2019`,
    status: `Ongoing`,
    genres: `Romance, Drama`,
    description: `After Xu Shenzhen's family went bankrupt by the scheme of other, desperate to pay her debt she sold herself to Li Jun Chen, throwing her pride away in the middle of the night when the rain and snow scattered.
Follow Shenzhen as she avenge her family and maybe fall in love?`,
    valumes: 1,
  },
    // [9]
    {
    title: `Sono Bisque Doll wa Koi wo Suru`,
    authors: `Shinichi Fukada`, 
    demographic: `Manga`,
    published: `2018`,
    status: `Completed`,
    genres: `Romance, Slice of Life`,
    description: `Traumatized by a childhood incident with a friend who took exception to his love of traditional dolls, doll-artisan hopeful Wakana Gojo passes his days as a loner, finding solace in the home ec room at his high school.`,
    valumes: 1,
  },
    // [10]
    {
    title: `Class de 2 Banme ni Kawaii Onna no Ko to Tomodachi ni Natta`,
    authors: `Takata`, 
    demographic: `Manga`,
    published: `2022`,
    status: `Ongoing`,
    genres: `Comedy, Romance`,
    description: `Maki Maehara is always on his own at school. He has no friends or hobbies others share, and he doesn't expect the upcoming academic year to be any different, even surrounded by new faces. And six months later, it seems like he was right—until he runs into his popular classmate Umi Asanagi at a video store! Always at the center of attention and called the "second prettiest in class" by the boys, Asanagi's from a totally different world. But it turns out the two have more overlapping interests than just the B-grade movies they came to check out...and Asanagi asks Maehara to be her friend!`,
    valumes: 1,
  },
    // [11]
    {
    title: `Amagami san Chi no Enmusubi`,
    authors: `Naitou`, 
    demographic: `Manga`,
    published: `2021`,
    status: `Ongoing`,
    genres: `Comedy, Romance`,
    description: `After witnessing his mother's death at a young age, Uryuu Kamihate grew up disillusioned with the gods, dismissing faith in them as utter nonsense. Due to his beliefs, he aims to become a doctor, spending most of his time studying to enter the prestigious Kyoto University.`,
    valumes: 1,
  },
    // [12]
    {
    title: `Tensei Shitara Slime Datte ken`,
    authors: `Kawakami Taiki`, 
    demographic: `Manga`,
    published: `2015`,
    status: `Ongoing`,
    genres: `Action, Comedy, Fantasy`,
    description: `Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.`,
    valumes: 1,
  },
    // [13]
    {
    title: `My Office Noona Story`,
    authors: `Kim Jane`, 
    demographic: `Manhwa`,
    published: `2020`,
    status: `Completed`,
    genres: `Drama, Romance, Slice of Life`,
    description: `Ahn was a mature and attractive older woman I met through my company’s task force. Wise and caring, that’s how I became captivated with her… However, she was also a woman with a child.`,
    valumes: 1,
  },
    // [14]
    {
    title: `Kono Kaisha ni Suki na Hito ga Imasu`,
    authors: `Enomoto Akamaru`, 
    demographic: `Manga`,
    published: `2019`,
    status: `Completed`,
    genres: `Comedy, Romance`,
    description: `Yui Mitsuya and Masugu Tateishi aren't just any coworkers—they totally have the hots for each other. His helpful yet humble attitude makes her giddy, and her cuteness leaves him grinning like a fool. Problem is, they're trying to keep their new relationship under wraps to avoid making things awkward at work. But seeing how they can't keep their hands off each other, they run the risk of spilling their little secret with each passing day at the office.`,
    valumes: 1,
  },
    // [15]
    {
    title: `Kawaii dake ja Nai Shikimori-san`,
    authors: `Maki Keigo`, 
    demographic: `Manga`,
    published: `2019`,
    status: `Completed`,
    genres: `Comedy, Romance`,
    description: `Yuu Izumi is a high school student whose life is filled with misfortune. Ever since he was young, he would always return home with injuries. Due to his unlucky disposition, his days are full of nothing but unfortunate events—that is, until he started dating Micchon Shikimori.`,
    valumes: 1,
  },
]