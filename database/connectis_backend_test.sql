-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 16 sep. 2020 à 19:50
-- Version du serveur :  10.1.28-MariaDB
-- Version de PHP :  5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `connectis_backend_test`
--

-- --------------------------------------------------------

--
-- Structure de la table `co_ligne_article_operation`
--

CREATE TABLE `co_ligne_article_operation` (
  `id` int(20) NOT NULL,
  `produit_id` varchar(20) NOT NULL,
  `operation_id` int(30) NOT NULL,
  `quantite` int(20) NOT NULL,
  `prix` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `co_operation`
--

CREATE TABLE `co_operation` (
  `id` int(11) NOT NULL,
  `emetteur` varchar(30) NOT NULL,
  `recepteur` varchar(30) NOT NULL,
  `prix` int(30) NOT NULL,
  `date_operation` date NOT NULL,
  `id_type_operation` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `co_produits`
--

CREATE TABLE `co_produits` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `volume` bigint(25) NOT NULL,
  `prix` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `co_produits`
--

INSERT INTO `co_produits` (`id`, `nom`, `volume`, `prix`) VALUES
(1, 'Tchukudu 1Gb', 1000000000, 1),
(2, 'Tchukudu 3Gb', 3000000000, 3),
(3, 'Tchukudu 5Gb', 5000000000, 5);

-- --------------------------------------------------------

--
-- Structure de la table `co_utilisateurs`
--

CREATE TABLE `co_utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `dob` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telephone` varchar(25) NOT NULL,
  `password` varchar(2000) NOT NULL,
  `created_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `co_utilisateurs`
--

INSERT INTO `co_utilisateurs` (`id`, `nom`, `prenom`, `dob`, `email`, `telephone`, `password`, `created_date`) VALUES
(4, 'ashley', 'rod', NULL, 'rddd@dxdd.cpm', '099990', '$2b$10$zvfJ0xYOpJ0BPjfstLb4p.oL314AzapqpOJFmmiuzpUnNG./DjP1.', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `co_ligne_article_operation`
--
ALTER TABLE `co_ligne_article_operation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `co_operation`
--
ALTER TABLE `co_operation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `co_produits`
--
ALTER TABLE `co_produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `co_utilisateurs`
--
ALTER TABLE `co_utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telephone` (`telephone`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `co_ligne_article_operation`
--
ALTER TABLE `co_ligne_article_operation`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `co_operation`
--
ALTER TABLE `co_operation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `co_produits`
--
ALTER TABLE `co_produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `co_utilisateurs`
--
ALTER TABLE `co_utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
