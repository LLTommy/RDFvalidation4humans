# RDFvalidation4humans
Repository for the Biohackathon 2019, Fukuoka. Topic: Human readable RDF validation

# Abstract 
Creating restriction on a graph can be done via ShEx/ SHACL. I would like to create some tooling around this topic, my vision is to test if we could turn natural language into ShEx/SHACL,  inspired by Cucumber/Gherkin from Behavior Driven Development, which turns “language” into test cases. To the best of my knowledge, this does not exist. So I aim to create a basic prototype at the BioHackathon as proof of concept.

# Description of the project
A powerful feature of RDF is the open world assumption. However, sometimes we want to introduce some restriction and validate the graph accordingly. This can be done via SPARQL or in a more standardized way using ShEx or SHACL. I would like to create some tooling around this topic, namely my vision is to test if we could turn natural language into ShEx/SHACL. I am inspired by Cucumber/Gherkin from Behavior Driven Development, which turns “language” into test cases. 

This could help semantic web programmers to communicate with people that don’t have a deeper understanding of the technical background, e.g. a rule could be defined as “An eukaryotic cell MUST have a nucleus” or as a more complex example “A Biosample MUST have an ID, a name, a date and a submitter. A Biosample CAN have a location, but MUST not have multiple locations. A submitter MUST have an email address”. Those statements are restrictions on the graph, which I aim to create automatically from these statements. If designed correctly, it might be possible to turn the process upside down, so extract from a given ShEx/SHACL file the correct description of these rules in natural language.


# Updated description
Through discussions at the Biohackathon it was decided that a tool helping to create ShEx expression is very helpful, but does not necessarily has to include free text. Instead a prototype that is based on "html forms" was created. This work is supposed to continue after the BioHackathon and lead to a tool that can help to create shapes fast. In combination with the tools already provided e.g. rdfshape.weso.es one can imagin a nice workflow around RDF validation, including automated documentation.


# Validation Requirements
https://book.validatingrdf.com/bookHtml009.html

# Links
* [1] https://book.validatingrdf.com/
* [2] http://shex.io/
* [3] https://www.w3.org/TR/shacl/
* https://spinrdf.org/spin-shacl.html
