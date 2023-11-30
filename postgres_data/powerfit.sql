--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg120+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actividad; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.actividad (
    id_acti integer NOT NULL,
    nombre_acti character varying(25) NOT NULL,
    descripcion_acti text NOT NULL,
    tiempo_acti time without time zone NOT NULL,
    cal_quemadas_acti numeric(7,2) NOT NULL,
    puntos_ot_acti numeric(3,0)
);


ALTER TABLE public.actividad OWNER TO martin;

--
-- Name: actividad_id_acti_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.actividad_id_acti_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.actividad_id_acti_seq OWNER TO martin;

--
-- Name: actividad_id_acti_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.actividad_id_acti_seq OWNED BY public.actividad.id_acti;


--
-- Name: administrador; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.administrador (
    id_admin integer NOT NULL,
    id_emp character(11) NOT NULL,
    nombre_admin character varying(25) NOT NULL,
    apellido_admin character varying(25) NOT NULL,
    correo_admin character varying(50) NOT NULL,
    contrasena_admin character varying(200) NOT NULL
);


ALTER TABLE public.administrador OWNER TO martin;

--
-- Name: administrador_id_admin_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.administrador_id_admin_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.administrador_id_admin_seq OWNER TO martin;

--
-- Name: administrador_id_admin_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.administrador_id_admin_seq OWNED BY public.administrador.id_admin;


--
-- Name: empresa; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.empresa (
    id_emp integer NOT NULL,
    nombre_emp character varying(25) NOT NULL,
    direccion_emp character varying(50) NOT NULL,
    telefono_emp numeric NOT NULL
);


ALTER TABLE public.empresa OWNER TO martin;

--
-- Name: empresa_id_emp_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.empresa_id_emp_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.empresa_id_emp_seq OWNER TO martin;

--
-- Name: empresa_id_emp_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.empresa_id_emp_seq OWNED BY public.empresa.id_emp;


--
-- Name: premio; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.premio (
    id_pre integer NOT NULL,
    nombre_pre character varying(25) NOT NULL,
    descripcion_pre text NOT NULL,
    puntos_rq_pre numeric(3,0) NOT NULL
);


ALTER TABLE public.premio OWNER TO martin;

--
-- Name: premio_id_pre_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.premio_id_pre_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.premio_id_pre_seq OWNER TO martin;

--
-- Name: premio_id_pre_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.premio_id_pre_seq OWNED BY public.premio.id_pre;


--
-- Name: registro; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.registro (
    id_reg integer NOT NULL,
    id_acti character(11) NOT NULL,
    id_user character(11) NOT NULL,
    fecha_hora_reg date NOT NULL,
    tipo_act_reg text NOT NULL,
    tiempo_reg time without time zone NOT NULL,
    distancia_reg numeric(7,2) NOT NULL
);


ALTER TABLE public.registro OWNER TO martin;

--
-- Name: registro_id_reg_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.registro_id_reg_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.registro_id_reg_seq OWNER TO martin;

--
-- Name: registro_id_reg_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.registro_id_reg_seq OWNED BY public.registro.id_reg;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: martin
--

CREATE TABLE public.usuario (
    id_user integer NOT NULL,
    id_emp character(11) NOT NULL,
    id_admin character(11) NOT NULL,
    nombre_user character varying(25) NOT NULL,
    apellido_user character varying(25) NOT NULL,
    correo_user character varying(50) NOT NULL,
    contrasena_user character varying(200) NOT NULL,
    fecha_nacimiento_user date NOT NULL,
    genero_user character varying(20) NOT NULL
);


ALTER TABLE public.usuario OWNER TO martin;

--
-- Name: usuario_id_user_seq; Type: SEQUENCE; Schema: public; Owner: martin
--

CREATE SEQUENCE public.usuario_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_user_seq OWNER TO martin;

--
-- Name: usuario_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: martin
--

ALTER SEQUENCE public.usuario_id_user_seq OWNED BY public.usuario.id_user;


--
-- Name: actividad id_acti; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.actividad ALTER COLUMN id_acti SET DEFAULT nextval('public.actividad_id_acti_seq'::regclass);


--
-- Name: administrador id_admin; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.administrador ALTER COLUMN id_admin SET DEFAULT nextval('public.administrador_id_admin_seq'::regclass);


--
-- Name: empresa id_emp; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.empresa ALTER COLUMN id_emp SET DEFAULT nextval('public.empresa_id_emp_seq'::regclass);


--
-- Name: premio id_pre; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.premio ALTER COLUMN id_pre SET DEFAULT nextval('public.premio_id_pre_seq'::regclass);


--
-- Name: registro id_reg; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.registro ALTER COLUMN id_reg SET DEFAULT nextval('public.registro_id_reg_seq'::regclass);


--
-- Name: usuario id_user; Type: DEFAULT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_user SET DEFAULT nextval('public.usuario_id_user_seq'::regclass);


--
-- Data for Name: actividad; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.actividad (id_acti, nombre_acti, descripcion_acti, tiempo_acti, cal_quemadas_acti, puntos_ot_acti) FROM stdin;
\.


--
-- Data for Name: administrador; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.administrador (id_admin, id_emp, nombre_admin, apellido_admin, correo_admin, contrasena_admin) FROM stdin;
\.


--
-- Data for Name: empresa; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.empresa (id_emp, nombre_emp, direccion_emp, telefono_emp) FROM stdin;
\.


--
-- Data for Name: premio; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.premio (id_pre, nombre_pre, descripcion_pre, puntos_rq_pre) FROM stdin;
\.


--
-- Data for Name: registro; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.registro (id_reg, id_acti, id_user, fecha_hora_reg, tipo_act_reg, tiempo_reg, distancia_reg) FROM stdin;
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: martin
--

COPY public.usuario (id_user, id_emp, id_admin, nombre_user, apellido_user, correo_user, contrasena_user, fecha_nacimiento_user, genero_user) FROM stdin;
\.


--
-- Name: actividad_id_acti_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.actividad_id_acti_seq', 1, false);


--
-- Name: administrador_id_admin_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.administrador_id_admin_seq', 1, false);


--
-- Name: empresa_id_emp_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.empresa_id_emp_seq', 1, false);


--
-- Name: premio_id_pre_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.premio_id_pre_seq', 1, false);


--
-- Name: registro_id_reg_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.registro_id_reg_seq', 1, false);


--
-- Name: usuario_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: martin
--

SELECT pg_catalog.setval('public.usuario_id_user_seq', 1, false);


--
-- Name: actividad actividad_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.actividad
    ADD CONSTRAINT actividad_pkey PRIMARY KEY (id_acti);


--
-- Name: administrador administrador_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id_admin);


--
-- Name: empresa empresa_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.empresa
    ADD CONSTRAINT empresa_pkey PRIMARY KEY (id_emp);


--
-- Name: premio premio_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.premio
    ADD CONSTRAINT premio_pkey PRIMARY KEY (id_pre);


--
-- Name: registro registro_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.registro
    ADD CONSTRAINT registro_pkey PRIMARY KEY (id_reg);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: martin
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_user);


--
-- PostgreSQL database dump complete
--

