'use strict';

export const SESSION_STORAGE_KEY = 'alignment-test';
export const ALIGNMENT_KEYS = {
  LX: 'lx',
  NX: 'nx',
  CX: 'cx',
  XG: 'xg',
  XN: 'xn',
  XE: 'xe',
};

export const ALIGNMENT_ABR = {
  LG: 'lg',
  NG: 'ng',
  CG: 'cg',
  LN: 'ln',
  NN: 'nn',
  CN: 'cn',
  LE: 'le',
  NE: 'ne',
  CE: 'ce',
};

export const HEADING_KEYS = {
  lg: 'Lawful Good',
  ng: 'Neutral Good',
  cg: 'Chaotic Good',
  ln: 'Lawful Neutral',
  nn: 'True Neutral',
  cn: 'Chaotic Neutral',
  le: 'Lawful Evil',
  ne: 'Neutral Evil',
  ce: 'Chaotic Evil',
};

export const alignmentsKeys = Object.keys(HEADING_KEYS);

export const PARAGRAPH_KEYS = {
  lg:
    'A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.  Lawful good is the best alignment you can be because it combines honor and compassion.  However, lawful good can be a dangerous alignment when it restricts freedom and criminalizes self-interest.',
  ng:
    'A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them. Neutral good is the best alignment you can be because it means doing what is good without bias for or against order. However, neutral good can be a dangerous alignment when it advances mediocrity by limiting the actions of the truly capable.',
  cg:
    "A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society. Chaotic good is the best alignment you can be because it combines a good heart with a free spirit. However, chaotic good can be a dangerous alignment when it disrupts the order of society and punishes those who do well for themselves.",
  ln:
    'A lawful neutral character acts as law, tradition, or a personal code directs him. Order and organization are paramount to him. He may believe in personal order and live by a code or standard, or he may believe in order for all and favor a strong, organized government. Lawful neutral is the best alignment you can be because it means you are reliable and honorable without being a zealot. However, lawful neutral can be a dangerous alignment when it seeks to eliminate all freedom, choice, and diversity in society.',
  nn:
    "A true neutral character does what seems to be a good idea. He doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most true neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil after all, he would rather have good neighbors and rulers than evil ones. Still, he's not personally committed to upholding good in any abstract or universal way. Some true neutral characters, on the other hand, commit themselves philosophically to neutrality. They see good, evil, law, and chaos as prejudices and dangerous extremes. They advocate the middle way of neutrality as the best, most balanced road in the long run. True neutral is the best alignment you can be because it means you act naturally, without prejudice or compulsion. However, true neutral can be a dangerous alignment when it represents apathy, indifference, and a lack of conviction.",
  cn:
    "A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it. Chaotic neutral is the best alignment you can be because it represents true freedom from both society's restrictions and a do-gooder's zeal. However, chaotic neutral can be a dangerous alignment when it seeks to eliminate all authority, harmony, and order in society.",
  le:
    'A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.  This reluctance comes partly from his nature and partly because he depends on order to protect himself from those who oppose him on moral grounds. Some lawful evil villains have particular taboos, such as not killing in cold blood (but having underlings do it) or not letting children come to harm (if it can be helped). They imagine that these compunctions put them above unprincipled villains.  Some lawful evil people and creatures commit themselves to evil with a zeal like that of a crusader committed to good. Beyond being willing to hurt others for their own ends, they take pleasure in spreading evil as an end unto itself. They may also see doing evil as part of a duty to an evil deity or master. Lawful evil is sometimes called diabolical, because devils are the epitome of lawful evil. Lawful evil is the best alignment you can be because it combines honor and dedicated self-interest. However, lawful evil can be a dangerous alignment because it represents methodical, intentional, and frequently successful evil.',
  ne:
    "A neutral evil villain does whatever he can get away with. He is out for himself, pure and simple. He sheds no tears for those he kills, whether for profit, sport, or convenience. He has no love of order and holds no illusion that following laws, traditions, or codes would make him any better or more noble. On the other hand, he doesn't have the restless nature or love of conflict that a chaotic evil villain has.  Some neutral evil villains hold up evil as an ideal, committing evil for its own sake. Most often, such villains are devoted to evil deities or secret societies. Neutral evil is the best alignment you can be because you can advance yourself without regard for others. However, neutral evil can be a dangerous alignment because it represents pure evil without honor and without variation.",
  ce:
    'A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him. Chaotic evil is sometimes called demonic because demons are the epitome of chaotic evil. Chaotic evil is the best alignment you can be because combines self-interest and pure freedom. However, chaotic evil can be a dangerous alignment because it represents the destruction not only of beauty and life but also of the order on which beauty and life depend.',
};

export const RESULTS = `
<div class="graph-container">
  <div>
      <h3>Alignment:</h3>
      <canvas width="250%" height="310%" id="alignment"></canvas> 
  </div>
  <div>
      <h3>Law & Chaos:</h3>
      <canvas width="250%" height="310%" id="law-chaos"></canvas> 
  </div>
  <div>
      <h3>Good & Evil</h3>
      <canvas width="250%" height="310%" id="good-evil"></canvas> 
  </div>
</div>
`;
