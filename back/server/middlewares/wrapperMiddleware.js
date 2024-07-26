export default (controller) => {
  return async (req, res, next) => {
    try {
      // Comme je me met en intermédiaire entre express et le controller, c'est moi qui doit refournir les req, res, next à celui-ci
      await controller(req, res, next);
    } catch (err) {
      // Le status 500 sont des erreurs du serveur
      // On répond tout de même en JSON pour respecter le format de réponse global, que l'utilisateur de l'API ne soit pas perdu
      console.error(err);
      // err est un objet une instance de la classe Error, cette instance à différentes propriétés dont le message
      // on peut décider de répondre le message de façon transparente, ou surcharger ce message afin de le rendre plus grand public
      // Au niveau du serveur on répond à un développeur front, donc on peut lui répondre en anglais. Que ce soit pour les erreurs serveurs ou les erreurs utilisateur. C'est lui qui gérera la communication au grand public.
      res.status(500).json("Internal server error, try again later.");
    }
  };
};
