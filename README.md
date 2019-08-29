# RDFvalidation4humans
Repository for the Biohackathon 2019, Fukuoka. Topic: Human readable RDF validation

#Abstarct
Creating restriction on a graph can be done via ShEx/ SHACL. I would like to create some tooling around this topic, my vision is to test if we could turn natural language into ShEx/SHACL,  inspired by Cucumber/Gherkin from Behavior Driven Development, which turns “language” into test cases. 

To the best of my knowledge, this does not exist. So I aim to create a basic prototype at the BioHackathon as proof of concept.

# Description of the project
A powerful feature of RDF is the open world assumption. However, sometimes we want to introduce some restriction and validate the graph accordingly. This can be done via SPARQL or in a more standardized way using ShEx or SHACL. I would like to create some tooling around this topic, namely my vision is to test if we could turn natural language into ShEx/SHACL. I am inspired by Cucumber/Gherkin from Behavior Driven Development, which turns “language” into test cases. 

This could help semantic web programmers to communicate with people that don’t have a deeper understanding of the technical background, e.g. a rule could be defined as “An eukaryotic cell MUST have a nucleus” or as a more complex example “A Biosample MUST have an ID, a name, a date and a submitter. A Biosample CAN have a location, but MUST not have multiple locations. A submitter MUST have an email address”. Those statements are restrictions on the graph, which I aim to create automatically from these statements. If designed correctly, it might be possible to turn the process upside down, so extract from a given ShEx/SHACL file the correct description of these rules in natural language.

To the best of my knowledge, this does not exist so far. This project is just an idea I have in my head for a couple of months now, but no work has been done so far to test all this. So I aim to create a basic prototype at the BioHackathon as proof of concept but if successful, I think this could be interesting for the semantic web community also beyond life science.

Let me know what you think about this guys - in any case! - if it’s accepted or not. I’d love to hear some feedback about this idea!



# Description of the RDF data validation problem 
RDF is composed of triples, which have arcs (predicates) between nodes. We can describe:

* the form of a node (the mechanisms for doing this will be called “node constraints”);
* the number of possible arcs incoming/outgoing from a node; 
* and the possible values associated with those arcs.
Taken from [1]

# Validation Requirements
https://book.validatingrdf.com/bookHtml009.html

# Links
* [1] https://book.validatingrdf.com/
* [2] http://shex.io/
* [3] https://www.w3.org/TR/shacl/
* https://spinrdf.org/spin-shacl.html
